const mysql = require("mysql2/promise");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "sqltietokanta",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;


    if (!username || !password) {
      return res.status(400).send("Missing fields");
    }

    const [rows, fields] = await db.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (rows.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    await db.execute(
      "INSERT INTO users (username,password) VALUES (?, ?)",
      [username, hash]
    );
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyUser = async (username, password, done) => {
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM käyttäjä WHERE Käyttäjänimi = ?",
      [username]
    );

    if (rows.length > 0) {
      const user = rows[0];
      if (bcrypt.compareSync(password, user.SalasanaSalt)) {
        return done(null, user);
      }
    }
    
    done(null, false);
  } catch (error) {
    console.log(error);
    done(error);
  }
};

const loginUser = (req, res) => {
  // console.log(req.user);
  const token = jwt.sign(
    { id: req.user.ID },
    process.env.JWT_SECRET || "test",
    {
      expiresIn: 2592000, // expires in 30 days
    }
  );
  res.status(200).json({ auth: true, token });
};

module.exports = {
  createUser,
  verifyUser,
  loginUser,
};