import React, { useState } from "react";
import axios from "axios";

export const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  function submitData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };
    console.log(newStudent);
    axios
      .post("http://localhost:8070/student/addStudent", newStudent)
      .then(() => {
        alert("Student added successfully");
        setName("");
        setAge(0);
        setGender("");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="container">
      <h1 className="display-4 text-center">Add Students</h1>
      <form onSubmit={submitData}>
        <div className="form-group">
          <label>Student name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter student's name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Student age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter student's age"
            onChange={(e) => {
              setAge(parseInt(e.target.value));
            }}
          />
        </div>
        <div className="mb-3">
          <label>Student gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter student's gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
