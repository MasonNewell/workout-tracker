const router = require("express").Router();
const path = require("path");
//  ===== /exercise

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;
