const Joi = require("joi");
const mongoose = require("mongoose");

const Crawldate = mongoose.model(
  "Crawldates",
  new mongoose.Schema({
    date: Date
  })
);

exports.Crawldate = Crawldate;
