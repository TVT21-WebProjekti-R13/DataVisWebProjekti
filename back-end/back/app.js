const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mysql = require("mysql2");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const dataRouter = require("./routes/data");
const testRouter = require("./routes/testRouter");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

app.use("/", indexRouter);
app.use("/data", dataRouter);
app.use("/users", usersRouter);
app.use("/test", testRouter);

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "12345",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("db connected!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
