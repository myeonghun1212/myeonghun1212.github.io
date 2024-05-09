const fs = require("fs");
const path = require("path");

const file = process.env.DATAFILE;
const jsonPath = path.join(__dirname, "../data", file);
const jsonData = fs.readFileSync(jsonPath, "utf8");

const stocks = JSON.parse(jsonData);

module.exports = {
  filename: file,
  data: stocks,
};
