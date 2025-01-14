require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const routes = require("./routes/general");
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
