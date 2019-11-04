const mongoose = require("mongoose");
const products = require("./routes/products");
const crawldates = require("./routes/crawldates");
const moment = require("moment");
const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const { Product } = require("./models/product");
const { Crawldate } = require("./models/crawldate");

mongoose
  .connect("mongodb://localhost/price-manager")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json());
app.use("/api/products", products);
app.use("/api/crawl_dates", crawldates);
app.use(
  "/",
  router.get("/", async (req, res) => {
    res.send("Price manager");
  })
);

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));
