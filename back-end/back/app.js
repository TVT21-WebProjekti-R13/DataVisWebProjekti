require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mysql = require("mysql2");
const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;
const JwtStrategy = require("passport-jwt").Strategy;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const dataRouter = require("./routes/data");
const testRouter = require("./routes/testRouter");

const { verifyUser } = require("./controllers/users");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: /*process.env.GAE_DB_SOCKET*/ process.env.PORT, credentials: true }));
app.use(helmet());

passport.use(new BasicStrategy(verifyUser));
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: (req) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies["token"];
        }
        return token;
      },
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtPayload, done) => {
      // console.log(jwtPayload);
      return done(null, jwtPayload);
    }
  )
);

app.use("/", indexRouter);
app.use("/data", dataRouter);
app.use("/users", usersRouter);
app.use("/test", testRouter);

const db = mysql.createConnection({
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || process.env.GAE_DB_SOCKET
});

db.connect(function (err) {
  if (err) throw err;
  console.log("db connected!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
