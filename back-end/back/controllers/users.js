const mysql = require("mysql2/promise");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "12345",
  database: process.env.DB_NAME || "sqltietokanta",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const createUser = async (req, res) => {
  try {
    const { username, password, email, firstname, lastname } = req.body;

    const [rows, fields] = await db.query(
      "SELECT * FROM käyttäjä WHERE Käyttäjänimi = ?",
      [username]
    );

    if (rows.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await db.query(
      "INSERT INTO käyttäjä (Käyttäjänimi, sPosti, Etunimi, Sukunimi, SalasanaSalt) VALUES (?, ?, ?, ?, ?)",
      [username, email, firstname, lastname, hashedPassword]
    );

    res.status(200).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
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
