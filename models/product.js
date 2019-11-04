const Joi = require("joi");
const mongoose = require("mongoose");

const Product = mongoose.model(
  "Products",
  new mongoose.Schema({
    title: String,
    source: { shop: String, price: [Number], sold: Number, url: String },
    trackers: [
      {
        title: String,
        shop: String,
        pricehistory: [{ price: Number, date: Date }],
        url: String
      }
    ]
  })
);

exports.Product = Product;
