const mysql = require("mysql2/promise");
const { customAlphabet } = require("nanoid");

const db = mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
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
    try {
        await db.query(
            "INSERT INTO visuals (tables, userID, shareID) VALUES (?, ?, ?)",
            [table, req.user.id, customAlphabet("1234567890abcdef", 10)()]
        );
    } catch (error) {
        console.log(error);
    }

    res.json(table);
};

const getCustomData = async (req, res) => {
    try {
        if (req.query.shareID == null) {
            return res.status(404).json({ message: "Not found" })
        }
        const [rows, fields] = await db.query("SELECT tables FROM visuals WHERE shareID = ?", [req.query.shareID])
        if (rows.length < 0) {
            return res.status(404).json({ message: "Not found" })
        }
        res.json(rows[0].tables)
    } catch (error) {
        console.log(error)
    }

}
const Update = async (req, res) => {

    const [rows, fields] = await db.query("SELECT year,month FROM co2monthly")
    if (rows.length > 0) {

        for (let i = 0; i < rows.length; i++) {
            let month;
            let year;
            let time;
            if (rows[i].month.toString().length === 1) {
                month = "0" + rows[i].month.toString();
            } else {
                month = rows[i].month.toString();
            }
            year = rows[i].year.toString();
            time = year + "-" + month
            console.log(time)
            const [rows2, fields] = await db.query("UPDATE co2monthly SET month = ? WHERE year = ? AND month = ?", [time, rows[i].year.toString(), rows[i].month.toString()])
        }



    }
    return res.json(rows);
}
// protected data example
const getUserVisuals = async (req, res) => {
    const [rows, fields] = await db.query("SELECT shareID FROM visuals WHERE userID = ?", [req.user.id])
    res.json(rows);
};

module.exports = {
    getData,
    Update,
    getUserVisuals,
    saveData,
    getCustomData,
};
