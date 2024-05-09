const fs = require("fs");
const path = require("path");
const express = require("express");

const file = "stocks-complete.json";
const jsonPath = path.join(__dirname, "data", file);

const jsonData = fs.readFileSync(jsonPath, "utf8");

const provider = require("./scripts/data-provider.js");
const stocks = provider.data;
const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

const router = require("./scripts/stock-router.js");

router.handleAllStocks(app);
router.handleSingleSymbol(app);
router.handleNameSearch(app);

let port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});
