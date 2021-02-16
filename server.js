const express = require("express");
// add mongoose //
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3002;
const app = express();
// this requires the content inside of the models foldr
const db = require("./models")

app.use(express.urlencoded({ extended : true }));
//so we can use the public file
app.use(express.static("public"));

app.use("./routes/htmlRoutes");
app.use("./routes/apiRoutes")

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})
