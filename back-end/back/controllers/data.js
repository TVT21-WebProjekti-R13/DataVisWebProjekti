const mysql = require("mysql2/promise");
const { customAlphabet } = require("nanoid");

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const getData = async (req, res) => {
    const { viewID } = req.params;
    const [rows, fields] = await db.query("SELECT * FROM views WHERE viewID = ?", [viewID]);

    const visuals = rows[0].visuals;
    const visualsArray = visuals.split(",");

    const visualsData = await Promise.all(visualsArray.map(async (visual) => {
        const [rows, fields] = await db.query("SELECT * FROM visuals WHERE visual_name = ?", [visual]);
        return rows[0];
    }));

    const tableArray = visualsData.map((visual) => {
        const table = visual.tables;
        const tableArray = table.split(",");
        return tableArray;
    });

    const tables = await Promise.all(tableArray.map(async (table) => {
        const data = await Promise.all(table.map(async (table) => {
            const [rows, fields] = await db.query("SELECT * FROM " + table);
            return rows;
        }));
        return data
    }));

    visualsData.map((visual, index) => {
        visual.data = tables[index];
    });

    res.json(visualsData);
}

const saveData = async (req, res) => {
    const data1 = req.body.params.data1;
    const table = data1.toString();
    console.log(table)
    try {
        await db.query(
            "INSERT INTO views (visuals, owner, viewID) VALUES (?, ?, ?)",
            [table, req.user.id, customAlphabet("1234567890abcdef", 10)()]
        );
    } catch (error) {
        console.log(error);
    }

    res.json(table);
};
const Update = async (req, res) => {
    //let country;
    //let anomaly;
    //const [rows, fields] = await db.query("SELECT * FROM v8")
    //const [rows, fields] = await db.query("SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'v8' ORDER BY ORDINAL_POSITION");
    //for (let i = 0; i < rows.length; i++) {
    //  if (rows[i].COLUMN_NAME !== "time") {
    //    country = rows[i].COLUMN_NAME;
    //}
    //console.log(country)
    //}

    //return res.json(rows);
}
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

// protected data example
const getUserVisuals = async (req, res) => {
    const [rows, fields] = await db.query("SELECT viewID FROM views WHERE owner = ?", [req.user.id])
    res.json(rows);
};

const deleteVisual = async (req, res) => {
    const data = req.body.params.data1;
    console.log(data)
    const [rows2, fields2] = await db.query("DELETE FROM views WHERE viewID = ?", [data])
    res.json(data);
};

module.exports = {
    getData,
    getUserVisuals,
    saveData,
    getCustomData,
    deleteVisual,
    Update,
};
