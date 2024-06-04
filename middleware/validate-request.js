const { validationResult } = require("express-validator");

function validateRequestSchema(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // bad data from user
  }
  next();
}

module.exports = {
  validateRequestSchema,
};
