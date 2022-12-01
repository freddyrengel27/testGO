const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes.js");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));

app.use("/back", routes);

module.exports = app;