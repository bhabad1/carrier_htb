let expressionMetric = {};
let db = require("../helpers/db");

expressionMetric.getMetricList = async (req, res, next) => {
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

expressionMetric.getMericDetails = async (req, res, next) => {
  try {
    const { metricId } = req.params.metricId;
    db.query(
      "SELECT * FROM expressions WHERE id = ?",
      [metricId],
      (err, results) => {
        if (err) throw err;
        res.json(results[0]);
      }
    );
  } catch (error) {
    console.log("Error: ", error);
    next(error);
  }
};

expressionMetric.updateMetric = async (req, res, next) => {
  try {
    const { metricId } = req.params.metricId;
    const { name, formula } = req.body;
    db.query(
      "UPDATE expressions SET experssion_name = ?, formula = ? WHERE id = ?",
      [name, formula, metricId],
      (err) => {
        if (err) throw err;
        res.json({ message: "Expression updated successfully" });
      }
    );
  } catch (error) {
    console.log("Error: ", error);
    next(error);
  }
};

module.exports = expressionMetric;
