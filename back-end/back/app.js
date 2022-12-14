require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mysql = require("mysql2");
const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;
const JwtStrategy = require("passport-jwt").Strategy;

const usersRouter = require("./routes/users");
const dataRouter = require("./routes/data");

const { verifyUser } = require("./controllers/users");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*
const originWhitelist = [
  'https://storage.googleapis.com/logical-codex-367210.appspot.com',
  'https://logical-codex-367210.lm.r.appspot.com'
]
const corsOptions = {
  origin: function(origin, callback) {
    let isWhitelisted = originWhitelist.indexOf(origin) !== -1
    callback(null, isWhitelisted)
  },
  credentials: true
}

app.use(cors(corsOptions))
*/

//app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cors({ origin: process.env.FRONT_URL, credentials: true}))
//app.use(cors({ origin: "storage.googleapis.com/logical-codex-367210.appspot.com"}))
//app.options('*', cors())
/*
app.use(function(req, res, next) {
  res.header("Access-Control-allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  next()
})
*/

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

app.use("/data", dataRouter);
app.use("/users", usersRouter);

const db = mysql.createConnection({
  socketPath: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("db connected!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
