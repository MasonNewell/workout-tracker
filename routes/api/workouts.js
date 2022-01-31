const router = require("express").Router();
const Workout = require("../../models/workout");

// ======= /api/workouts

// Get all workouts
router.get("/", (req, res) => {
  Workout.find({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((error) => {
      res.json(error);
    });
});

// Get workouts in range
router.get("/range", (req, res) => {
  Workout.find({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((error) => {
      res.json(error);
    });
});

// Get workout by ID
router.get("/:id", ({ params, body }, res) => {
  Workout.findById({ _id: params.id })
    .then((workoutData) => res.json(workoutData))
    .catch((error) => res.status(400).json(error));
});

// Post new workout
router.post("/", ({ body }, res) => {
  Workout.create(body)
    .then((exerciseData) => {
      res.json(exerciseData);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// Put on old/current workout
router.put("/:id", ({ params, body }, res) => {
  Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
    .then((updatedWorkout) => res.json(updatedWorkout))
    .catch((error) => res.status(400).json(error));
});

module.exports = router;
