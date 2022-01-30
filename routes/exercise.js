const router = require("express").Router();
//  ===== /exercise

router.get("/", (req, res) => {
  res.json("hello world");
});

module.exports = router;
