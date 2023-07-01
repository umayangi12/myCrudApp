const router = require("express").Router();
let Student = require("../models/Student");

//POST request
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });

  newStudent
    .save() //pass the objec to mongodb
    .then(() => {
      res.json("Student added successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
});

//GET request
router.route("/").get((req, res) => {
  Student.find()
    .then((allStudents) => {
      res.json(allStudents);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
