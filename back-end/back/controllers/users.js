const mysql = require("mysql2/promise");
const bcrypt = require('bcrypt');

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

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Missing fields");
    }

    const [rows, fields] = await db.execute(
      "SELECT password FROM users WHERE username = ?",
      [username]
    );
    if (rows.length > 0) {
      console.log(rows[0].password);
      const hash = rows[0].password;
      if (bcrypt.compareSync(password, hash)) {
        return res.status(200).send("login Successful!");
      }
    }
    res.status(400).send("incorrect credentials!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createUser,
  loginUser
};
