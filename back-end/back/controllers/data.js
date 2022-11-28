const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "12345",
    database: process.env.DB_NAME || "sqltietokanta",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const getData = async (req, res) => {

    const { data1 } = req.query
    const query1 = "SELECT * FROM " + data1;

    const [rows, fields] = await db.execute(query1);
    if (rows.length > 0) {
        console.log(rows)
    }
    res.json(rows);

}

// protected data example
const getProtectedData = async (req, res) => {
    const data = [
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Jane", age: 21 },
        { id: 3, name: "Jack", age: 22 },
    ];
    res.json(data);
};

module.exports = {
    getData,
    getProtectedData,
};
