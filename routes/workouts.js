const router = require("express").Router();
// models
// routes
router.get("/", (req, res) => {
  res.json("hello world");
});

module.exports = router;
