const router = require("express").Router();
//  ===== /stats

router.get("/", (req, res) => {
  res.json("hello world");
});

module.exports = router;
