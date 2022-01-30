const router = require("express").Router();
const path = require("path");
//  ===== /stats

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
