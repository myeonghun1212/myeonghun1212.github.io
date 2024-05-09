const fs = require("fs");
const path = require("path");
const express = require("express");

const file = "stocks-complete.json";
const jsonPath = path.join(__dirname, "data", file);

const jsonData = fs.readFileSync(jsonPath, "utf8");

const stocks = JSON.parse(jsonData);
const app = express();

app.get("/", (req, resp) => {
  resp.json(stocks);
});

app.use('/static',  express.static(path.join(__dirname,'public'))); 

app.get("/stock/:symbol", (req, resp) => {
  const symbolToFind = req.params.symbol.toUpperCase();

  const matches = stocks.filter((obj) => symbolToFind === obj.symbol);

  resp.json(matches);
});
app.get("/stock/name/:substring", (req, resp) => {
  
  const substring = req.params.substring.toLowerCase();
  
  const matches = stocks.filter((obj) =>
    obj.name.toLowerCase().includes(substring)
  );
  
  resp.json(matches);
});


let port = 8080;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});