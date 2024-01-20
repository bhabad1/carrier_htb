const express = require("express");
const mysql = require("mysql2");

var indexRouter = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "metrics",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Get all expressions
app.get("/getAll", (req, res) => {
  db.query("SELECT * FROM expressions", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get all operators
app.get("/getAllOperator", (req, res) => {
  db.query("SELECT * FROM operators", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get particular expressions data based on Id
app.get("/expression/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM expressions WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Update a expressions
app.put("/expression/:id", (req, res) => {
  const { id } = req.params;
  const { name, formula } = req.body;
  db.query(
    "UPDATE expressions SET experssion_name = ?, formula = ? WHERE id = ?",
    [name, formula, id],
    (err) => {
      if (err) throw err;
      res.json({ message: "Expression updated successfully" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
