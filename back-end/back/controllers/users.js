const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "datavis",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    await db.execute(query, [name, email, password]);
    res.status(201).send("User added");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
