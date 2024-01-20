var express = require("express");
var router = express.Router();
const queryBuilder = require("../controllers/queryBuilder");

/* GET home page. */
router.get("/getAllOperands", function (req, res, next) {
  queryBuilder.getAllOperands();
});

router.get("/getAllOperators", (req, res, next) => {
  queryBuilder.getMericDetails(req, res, next);
});

module.exports = router;
