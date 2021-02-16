const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req,res) => {
    db.Workout.find({}).then(dbWorkout => {
        console.log("workouts");
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});
//this is where the router will add the different exercises

router.put("/api/workouts/:id", (req, res) => {
    db.workout.findOneAndUpdate(
        {_id: req.params.id},
        {
            $inc: {totalDuration: req.body.duration},
            $push: {exercises: req.body}
        },
        { new: true}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    
});

router.get("/api/workouts/range", (req, res) =>{
    db.Workout.find({}).then(dbWorkout =>{
        console.log("rangeworkouts");
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});
module.exports = router;