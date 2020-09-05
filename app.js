require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const sessions = require("express-sessions");
const morgan = require('morgan');

//express app
const app = express();

//connect to the db
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to DB"));

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
// const loginRouter = require("./routes/login");
// const morgan = require("morgan");
// app.use("/login", loginRouter);

//listen at port 3000
app.listen(3000, () => {
  console.log("Server has started at localhost:3000")
});