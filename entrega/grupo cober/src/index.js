const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "layer")));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
