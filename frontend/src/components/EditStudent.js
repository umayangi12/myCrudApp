import React, { useEffect, useState, setState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditStudent = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [gender, setGender] = useState("");

  const [updateStudent, setUpdateStudent] = useState({
    _id: null,
    name: "",
    age: 0,
    gender: "",
  });

  function submitData(e) {
    e.preventDefault();

    // const newStudent = {
    //   name,
    //   age,
    //   gender,
    // };
    // console.log(newStudent);
    // axios
    //   .post("http://localhost:8070/student/addStudent", newStudent)
    //   .then(() => {
    //     alert("Student added successfully");
    //     setName("");
    //     setAge(0);
    //     setGender("");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  }

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateStudent({
      ...updateStudent,
      [name]: value,
    });
  };

  const buttonUpdate = (_id) => {
    //get current values
    console.log(_id)


    //set state on uodate form
  }

  return (
    <div className="container">
      <form onSubmit={submitData}>
        <div className="form-group">
          <label>Student name</label>
          <input
            value={updateStudent.name}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter student's name"
            onChange={handleUpdateFieldChange}
          />
        </div>
        <div className="mb-3">
          <label>Student age</label>
          <input
            value={updateStudent.age}
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter student's age"
            onChange={handleUpdateFieldChange}
          />
        </div>
        <div className="mb-3">
          <label>Student gender</label>
          <input
            value={updateStudent.gender}
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter student's gender"
            onChange={handleUpdateFieldChange}
          />
        </div>

        <button
          onClick={() => buttonUpdate}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
