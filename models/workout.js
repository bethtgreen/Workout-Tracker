// Require Mongoose
const mongoose = require("mongoose");
// Save mongoose's ability the create a schema in a variable 
const Schema = mongoose.Schema;
// Schema for workouts(documents)
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        
      },
      name: {
        type: String,
        trim: true,
        
      },
      duration: {
        type: Number,
        
      },
      weight: {
        type: Number,
        
      },
      reps: {
        type: Number,
        
      },
      sets: {
        type: Number,
        
      },
      distance: {
        type: Number,
       
      },
      calories: {
        type: Number,
       
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;