const router = require("express").Router();
const workoutsRoutes = require("./workouts");

router.use("/workouts", workoutsRoutes);

module.exports = router;
