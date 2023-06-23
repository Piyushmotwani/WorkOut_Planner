const express = require('express');

const router = express.Router()


// GET all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'GET All workouts'})
})

// GET a single workout
router.get('/:id',(req,res)=>{
    res.json({msg:'GET a single workout'})
})

// POST a new workout
router.post('/',(req,res)=>{
    res.json({mssg:'POST a single workout'})
})

// DELETE  a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a  workout'})
})

//UPDATE A workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a single workout" });
});

module.exports = router