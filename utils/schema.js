const expressValidator = require("express-validator");
const schema = [
  expressValidator.body("x", "x must be a number").isNumeric(),
  expressValidator.body("y", "y must be a number").isNumeric(),
];

module.exports = schema;
