const express = require('express');
const router = express.Router();
const DB = require('../models');

router.get('/api', (req, res) => {
  res.send('API Route');
});

router.get('/api/workouts/range', (req, res) => {
  DB.Excercise.find().then((data) => {
    res.json(data);
  });
});

router.put('/api/workouts/:id', (req, res) => {
  console.log(req.body);
  const newWorkout = {
    exercises: [req.body],
  };
  DB.Exercise.collection
    .insert(newWorkout)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/api/workouts', (req, res) => {
  res.send('New Exercise Added');
});

module.exports = router;
