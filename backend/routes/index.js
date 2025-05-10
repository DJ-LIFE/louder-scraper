const express = require("express");
const { getAllEvents, trackClick } = require("../controller/eventController");

const router = express.Router();

router.get("/", getAllEvents);
router.post("/track", trackClick);

module.exports = router;
