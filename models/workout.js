const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  exercises: [
   { name: {
      type: String,
      required: "please enter a name"
    },
    duration: {
      type: Number,
      required: "please enter duration"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    },
    type: {
      type: String,
      required: "please enter a type"
    }
  }
  ],
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
