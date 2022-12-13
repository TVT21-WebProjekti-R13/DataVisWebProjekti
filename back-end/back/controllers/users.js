const mysql = require("mysql2/promise");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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

    const [rows, fields] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (rows.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hash = bcrypt.hashSync(password, 10);
    await db.query(
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
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (rows.length > 0) {
      const user = rows[0];
      if (bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      }
    }

    done(null, false);
  } catch (error) {
    done(error);
  }
};

const loginUser = (req, res) => {
  const token = jwt.sign(
    { id: req.user.id },
    process.env.JWT_SECRET || "test",
    {
      expiresIn: 2592000, // expires in 30 days
    }
  );

  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: true,
      secure: true,
      maxAge: 2592000000,
      path: "/",
      domain: "localhost",
    })
    .status(200)
    .json({ auth: true });
};

const deleteUser = async (req, res) => {
  try {
    await db.query("DELETE FROM users WHERE id = ?", [req.user.id]);
    await db.query("DELETE FROM views WHERE owner = ?", [req.user.id]);
    res.status(200).clearCookie("token").json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token").status(200).json({ auth: false });
}

module.exports = {
  createUser,
  verifyUser,
  loginUser,
  deleteUser,
  logoutUser,
};
