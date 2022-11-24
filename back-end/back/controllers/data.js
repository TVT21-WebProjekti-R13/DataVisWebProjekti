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

    const { data1, data2 } = req.query
    const table = [data1, data2]
    const tableS = table.toString();
    const query = "SELECT * FROM " + tableS;

    const [rows, fields] = await db.execute(query);
    if (rows.length > 0) {
        console.log(rows)
    }
    res.json(rows);


}
module.exports = {
    getData,
};
