const express = require("express");
const projects = require("./routes/project");
const auth = require("./routes/auth");
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", projects);
app.use("/api/v1", auth);

app.use(errorMiddleware);

module.exports = app;
