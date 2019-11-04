const mongoose = require("mongoose");
const products = require("./routes/products");
const crawldates = require("./routes/crawldates");
const moment = require("moment");
const express = require("express");
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

// async function test() {
//   const productList = await Product.find().sort({ title: 1 });
//   let x;
//   let changed = false;

//   for (x in productList) {
//     let y;
//     for (y in productList[x].trackers) {
//       // productList[x].trackers[y].pricehistory[0].date = moment(
//       //   "2019-11-01"
//       // ).format("YYYY-MM-DDT10:00:00.000Z");
//       // productList[x].trackers[y].pricehistory[1].date = moment(
//       //   "2019-11-02"
//       // ).format("YYYY-MM-DDT10:00:00.000Z");
//       // productList[x].trackers[y].pricehistory[2].date = moment(
//       //   "2019-11-03"
//       // ).format("YYYY-MM-DDT10:00:00.000Z");

//       if (productList[x].trackers[y].pricehistory.length < 4) {
//         // let length = productList[x].trackers[y].pricehistory.length;
//         // for (let index = length - 1; index >= 4; index--) {
//         //   productList[x].trackers[y].pricehistory.pop();
//         // }

//         productList[x].trackers[y].pricehistory.push({
//           date: new Date(),
//           price:
//             productList[x].trackers[y].pricehistory[
//               productList[x].trackers[y].pricehistory.length - 1
//             ].price
//         });

//         changed = true;
//       }
//     }

//     if (changed) {
//       let result = await Product.findOneAndUpdate(
//         { _id: productList[x]._id },
//         { trackers: productList[x].trackers }
//       );
//     }
//   }

//   console.log("done");
// }

// test();

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));
