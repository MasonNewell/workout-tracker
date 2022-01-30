const router = require("express").Router();
// models
// ======= /api/workouts

// Get all workouts
router.get("/", (req, res) => {
  res.json("hello world");
});

// ????    but must be before /:id
router.get("/range", (req, res) => {
  res.json("hello api/workouts/range");
});

// Get workout by ID
router.get("/:id", (req, res) => {
  res.json("hello ID world");
});

// Post new workout
router.post("/", (req, res) => {
  // return ...
});

// Put on old/current workout
router.put("/undefined", (req, res) => {
  res.json("hello api/workouts/range");
});

module.exports = router;
