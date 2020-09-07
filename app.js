//Environment Variables from the .env file 
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
//const sessions = require("express-sessions");
const morgan = require("morgan");

const app = express();

//static files inside the public folder
app.use(express.static("public"));
//view engine
app.set("view engine", "ejs");

//connect to the db , env variables set in the .env file
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to DB"));

app.use(morgan("dev"));
app.use(express.json());

//listening at port 3000
app.listen(3000, () => {
  console.log("Server has started at localhost:3000");
});

// routes
app.get("/", (req, res) => res.render("index"));
app.get("/login", (req, res) => res.render("login"));
app.get("/signup", (req, res) => res.render("signup"));
// app.post
// app.get()
// app.get('/user')
// app.get('/admin')

//last middleware for 404 error
app.use((req, res) => res.status(404).render("404"));