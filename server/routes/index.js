const express = require("express");
const router = express.Router();
const hotelsRoute = require("./hotels");
const roomsRoute = require("./rooms");

router.use("/hotels", hotelsRoute);
router.use("/rooms", roomsRoute);

module.exports = router;
