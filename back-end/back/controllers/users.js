const mysql = require("mysql2/promise");
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
      "SELECT * FROM käyttäjä WHERE username = ?",
      [username]
    );

    if (rows.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    await db.execute(
      "INSERT INTO käyttäjä (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
