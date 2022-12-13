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
    try {
        const { selectedVisuals } = req.body;
        const newViewID = customAlphabet("1234567890abcdef", 10)();
        await db.query(
            "INSERT INTO views (visuals, owner, viewID) VALUES (?, ?, ?)",
            [selectedVisuals.toString(), req.user.id, newViewID]
        );
        res.status(200).json({ viewID: newViewID } );
    } catch (error) {
        console.log(error);
    }
    res.status(200).json();
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

const getUserVisuals = async (req, res) => {
    const [rows, fields] = await db.query("SELECT viewID FROM views WHERE owner = ?", [req.user.id])
    res.json(rows);
};

const deleteVisual = async (req, res) => {
  try {
    const { viewID } = req.params;
    await db.query("DELETE FROM views WHERE viewID = ? AND owner = ?", [viewID, req.user.id]);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    getData,
    getUserVisuals,
    saveData,
    getCustomData,
    deleteVisual,
    Update,
};
