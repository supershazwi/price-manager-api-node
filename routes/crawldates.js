const { Crawldate } = require("../models/crawldate");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const crawldates = await Crawldate.find();
  res.send(crawldates);
});

module.exports = router;
