const express = require("express");
const { isInsideRectangle, isInsideCircle } = require("../utils/helpers");
const { RECT } = require("../utils/const");
const { checkPointValidator } = require("../utils/schema");
const { validateRequestSchema } = require("../middleware/validate-request");
const router = express.Router();
const schema = require("../utils/schema");

router.post(
  "/check-point-rectangle",
  schema,
  validateRequestSchema,
  async (req, res) => {
    const { body } = req;
    console.log("body", body);
    let result = false;

    if (isInsideRectangle({ x: body.x, y: body.y }, RECT)) {
      result = true;
    }

    return res.status(200).send(result);
  }
);

router.post(
  "/check-point-circle",
  schema,
  validateRequestSchema,
  async (req, res) => {
    const { body } = req;

    let result = false;

    if (isInsideCircle({ x: body.x, y: body.y }, CIRCLE_DATA)) {
      result = true;
    }

    return res.status(200).send(result);
  }
);

module.exports = router;
