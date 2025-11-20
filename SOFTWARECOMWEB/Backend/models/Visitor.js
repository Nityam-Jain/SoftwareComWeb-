const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  date: { type: String, required: true },
  count: { type: Number, default: 1 }  // counts visits from this IP
});

module.exports = mongoose.model("Visitor", visitorSchema);
