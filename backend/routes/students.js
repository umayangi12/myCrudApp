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

//PUT request
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  //destructuring
  const { name, age, gender } = req.body;

  const updateStudent = {
    name,
    age,
    gender,
  };

  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "Student updated", user: update });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error in update student", error: error.message });
    });
});

module.exports = router;
