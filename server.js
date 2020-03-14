const express = require('express');
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080
// const db = require("app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

app.use(express.static("app/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
});

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

app.listen(8080, () => {
    console.log("App running on port " + PORT);
  });