const express = require("express");
const app = express();
const errormiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Route imports
const product=require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

//middleware for errors
app.use(errormiddleware);

module.exports = app // to export app in other file for use