var express = require("express");
var router = express.Router();
const expressionMeric = require("../controllers/expressionMetric");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("indside get");
  expressionMeric.getMetricList(req, res, next);
});

router.get("/:metricId", (req, res, next) => {
  expressionMeric.getMericDetails(req, res, next);
});

router.put("/:metricId", (req, res, next) => {
  expressionMeric.updateMetric(req, res, next);
});

module.exports = router;
