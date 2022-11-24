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

db.pool.on('connection', function() {
    console.log('db connected')
})


const getData = async (req, res) => {

    const { data1 } = req.query
    //const table = [data1, data2]
    //const tableS = table.toString();
    const query1 = "SELECT * FROM " + data1;

    const [rows, fields] = await db.execute(query1);
    if (rows.length > 0) {
        console.log(rows)
    }
    res.json(rows);

}
module.exports = {
    getData,
};
