const mysql = require("mysql2/promise");

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
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send("Missing fields");
    }

    const [rows, fields] = await db.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (rows.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    await db.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
