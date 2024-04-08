const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "layer")));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
