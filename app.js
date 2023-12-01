const express = require("express");
// const userRouter = require("./routes/userRoute.js");

const app = express();
app.use(express.json());

// Testing API
app.get("/test", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

module.exports = app;
