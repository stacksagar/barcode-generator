const router = require("express").Router();

const barcode = require("../routers/barcode");

router.get("/health", (_req, res) => res.status(200).json({ message: "ok" }));
router.use("/api/v1/barcode", barcode);

module.exports = router;
