const express = require("express");
const router = express.Router();
const { trackVisitor } = require("../controllers/visitorController");

router.get("/", trackVisitor);

module.exports = router;
