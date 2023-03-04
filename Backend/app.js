const express = require("express");
const app = express();
// const errorHandler = require("./middleware/errors");
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());
app.use(express.json());
// Route Imports
const enquiry = require("./routes/enquiries");
app.use("/api/v1", enquiry);

//Middleware for errors
// app.use(errorHandler);
module.exports = app;
