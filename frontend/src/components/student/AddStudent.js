import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const notifyStudentAdd = () => {
    toast.success("Student Added Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

function submitData(e) {
  e.preventDefault();

  // Check for empty fields
  if (!name || !age || !gender) {
    toast.error("All fields are required!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return;
  }

  const newStudent = {
    name,
    age,
    gender,
  };

  axios
    .post("http://localhost:8070/student/addStudent", newStudent)
    .then(() => {
      notifyStudentAdd(); // Success toast message
      setName("");
      setAge(0);
      setGender("");
    })
    .catch((error) => {
      console.error(error);
      toast.error("Error in Adding the Student!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
}

  return (
    <div className="container">
      <h1 className="display-4 text-center">Add Students</h1>
      <hr />
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

        <button type="submit" className="btn btn-primary" onClick={submitData}>
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddStudent;
