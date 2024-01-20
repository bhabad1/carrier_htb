var express = require("express");
var router = express.Router();
const expressionMeric = require("../controllers/expressionMetric");
const query = require("./query");

/* GET home page. */
router.get("/", function (req, res, next) {
  expressionMeric.getMetricList();
});

router.get("/:metricId", (req, res, next) => {
  expressionMeric.getMericDetails(req, res, next);
});

router.put("/:metricId", (req, res, next) => {
  expressionMeric.updateMetric(req, res, next);
});

router.use("/query", query);

module.exports = router;
