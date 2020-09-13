const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const indexRoute = require("./routes/indexRoute");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminroutes");

//Environment Variables from the .env file and connect to the DB
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to DB"));

//express app
const app = express();

//static files inside the public folder
app.use(express.static("public"));
//view engine
app.set("view engine", "ejs");

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//listening at port 3000
app.listen(3000, () => {
  console.log("Server has started at localhost:3000");
});

// middlewares for routing
app.use(indexRoute);
app.use(authRoutes);

//last middleware for 404 error
app.use((req, res) => res.status(404).render("404"));
