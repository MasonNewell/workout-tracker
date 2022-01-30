const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // excercises
  exercise: [
    {
      type: {
        type: String,
        required: "Enter exercise type",
      },
      name: {
        type: String,
        required: "Enter exercise name",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Duration required",
      },
      distance: {
        type: Number,
      },
    },
  ],
});

module.exports = workoutSchema;
