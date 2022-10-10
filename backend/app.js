const express = require("express");
const post = require("./routes/post");
const user = require("./routes/user");
const cookieParser = require("cookie-parser");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
