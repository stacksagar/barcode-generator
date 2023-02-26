const express = require("express");
const PDF417 = require("pdf417-generator");
const Canvas = require("canvas");

const router = express.Router();

router.get("/pdf417", (req, res) => {
  const canvas = new Canvas.createCanvas(500, 500);
  PDF417.draw(req.query?.value, canvas);

  res.status(200).send(canvas.toDataURL());
});

module.exports = router;
