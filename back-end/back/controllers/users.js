const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_NAME || "datavis",
  password: process.env.DB_PASS || "",
});

const createUser = (data, callback) => {
  connection.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [data.name, data.email, data.password],
    (err, result) => {
      console.log("result", result);
      console.log("err", err);
    }
  );
};

module.exports = {
    createUser,
}

