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
    const table = data1
    let results = [];
    if (table) {
        for (let i = 0; i < table.length; i++) {
            const query = "SELECT * FROM " + table[i];
            if (table[i] == "users") {
                results = "Sormi sanoo soosoo!";
            }
            const [rows, fields] = await db.execute(query);
            if (rows.length > 0) {
                results[i] = rows;
            }
        }
    }
    res.json(results);
}

const saveData = async (req, res) => {
    const data1 = req.body.params.data1;
    const table = data1.toString();
    await db.execute("INSERT INTO visuals (tables,userID) VALUES (?, ?)", [table, 1]);
    res.json(table);

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
    saveData
};
