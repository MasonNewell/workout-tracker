const router = require("express").Router();
const apiRoutes = require("./api");
const workoutsRoutes = require("./workouts");
const statsRoutes = require("./stats");
const exerciseRoutes = require("./exercise");

router.use("/api", apiRoutes);
router.use("/workouts", workoutsRoutes);
router.use("/stats", statsRoutes);
router.use("/exercise", exerciseRoutes);

module.exports = router;
