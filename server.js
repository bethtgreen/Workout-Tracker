const express = require("express");
// add mongoose //
const PORT = 3002;
const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})