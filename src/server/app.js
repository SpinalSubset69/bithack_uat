const express = require("express");
const app = express();
const cors = require("cors");
const connect_to_database = require("./database/index");
const config = require("../config");
const path = require("path");

//Connection to the database
(async () => await connect_to_database(config.mongodb_uri))();

//STATIC CONTENT
const public_path = path.join(__dirname, "public");
app.use(express.static(public_path));

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ON GET REQUEST
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//ROUTES

module.exports = app;
