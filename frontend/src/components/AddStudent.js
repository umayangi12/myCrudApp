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
        gender
    }

    axios.post("/addStudent", newStudent)
    .then(()=> {
        alert("Student added successfully")
    })
    .catch((error) => {
        alert(error)
    })
  }

  return ( 
    <div className="container">
      <form onSubmit={submitData}>
        <div className="form-group">
          <label for="name">Student name</label>
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
          <label for="age">Student age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter student's age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="gender">Student gender</label>
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

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
