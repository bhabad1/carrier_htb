let expressionMetric = {};

expressionMetric.getMetricList = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error: ", error);
    next(error);
  }
};

expressionMetric.getMericDetails = async (req, res, next) => {
  try {
    const { metricId } = req.params.metricId;
  } catch (error) {
    console.log("Error: ", error);
    next(error);
  }
};

expressionMetric.updateMetric = async (req, res, next) => {
  try {
    const { metricId } = req.params.metricId;
  } catch (error) {
    console.log("Error: ", error);
    next(error);
  }
};

module.exports = expressionMetric;
