let queryBuilder = {};
let db = require("../helpers/db");

queryBuilder.getAllOperands = async (req, res, next) => {
  try {
    db.query("SELECT * FROM expressions", (err, results) => {
      console.log(results + "========rre");
      if (err) throw err;
      res.json(results);
    });
  } catch (error) {
    console.log("Error: ", error);
    next(error);
  }
};

module.exports = queryBuilder;
