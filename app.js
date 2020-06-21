const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/toursRoutes.js");
const userRouter = require("./routes/userRoutes.js");

const app = express(); // ------------> Gives our app all the express functions, features and modules here.

/////////////////////////////////////////////////////////////////////// 1)MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json()); // -----------> This is a middleware. Calling the json() method basically returns a function & its added to middleware stack.
app.use(express.static(`${__dirname}/public`));

//Here we're going to create our own middleware function.
app.use((req, res, next) => {
  console.log("Hello from my own middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/////////////////////////////////////////////////////////////////////// 3) ROUTES

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
