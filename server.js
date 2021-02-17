const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//port//
const PORT = process.env.PORT || 3002;
const app = express();
// this requires the content inside of the models foldr
const db = require("./models")
app.use(logger("dev"));

app.use(express.urlencoded({ extended : true }));
//so we can use the public file
app.use(express.static("public"));

// requires the routes
app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

//helps connect to heroku//
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/agile-fortress", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
  });

//listens to port//
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});

