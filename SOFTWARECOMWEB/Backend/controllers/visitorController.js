const Visitor = require("../models/Visitor");

// Extract IP address
function getIP(req) {
  return (
    req.headers["x-forwarded-for"]?.split(",").shift() ||
    req.socket?.remoteAddress ||
    req.ip
  );
}

exports.trackVisitor = async (req, res) => {
  try {
    const ip = getIP(req);
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    let visitor = await Visitor.findOne({ ip, date: today });

    // If same IP visits again today → increase count
    if (visitor) {
      visitor.count += 1;
      await visitor.save();
    } else {
      // New IP or new day
      await Visitor.create({
        ip,
        date: today,
        count: 1,
      });
    }

    // Count total visits for today (sum of all counts for today)
    const todayVisitors = await Visitor.aggregate([
      { $match: { date: today } },
      { $group: { _id: null, total: { $sum: "$count" } } },
    ]);

    const todayTotal = todayVisitors[0]?.total || 0;

    // Return array for chart
    res.json([
      {
        date: today,
        count: todayTotal,
      },
    ]);
  } catch (error) {
    console.log("Visitor tracking error:", error);
    res.status(500).json({ success: false });
  }
};
