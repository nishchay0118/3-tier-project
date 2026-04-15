const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "mysql-service",
  user: "root",
  password: "root",
  database: "testdb"
});

db.connect((err) => {
  if (err) {
    console.log("DB connection failed", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  db.query("SELECT 'Hello from MySQL 🚀' as message", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(5000, () => console.log("Backend running on 5000"));
