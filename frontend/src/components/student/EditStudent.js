import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    age: 0,
    gender: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const notifyStudentUpdate = () => {
    toast.success("Student Updated Successfully!", {
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

  useEffect(() => {
    getSingleStudent();
  }, [id]);

  const getSingleStudent = () => {
    axios
      .get(`http://localhost:8070/student/getStudent/${id}`)
      .then((res) => {
        setStudent({
          name: res.data.student.name,
          age: res.data.student.age,
          gender: res.data.student.gender,
        });
      })
      .catch((err) => {
        console.log(err);
       
      });
  };

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.age || !student.gender) {
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

    const data = {
      name: student.name,
      age: student.age,
      gender: student.gender,
    };

    axios
      .put(`http://localhost:8070/student/updateStudent/${id}`, data)
      .then((res) => {
        notifyStudentUpdate();
        console.log(res);
        setTimeout(() => {
          navigate("/getAllStudents"); // Navigate after 3 seconds
        }, 3000);
      })
      .catch((err) => {
        // alert("Error in update student ");
        console.log(err);
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
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Edit Students</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Student name</label>
          <input
            value={student.name}
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter student's name"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>Student age</label>
          <input
            value={student.age}
            type="number"
            className="form-control"
            name="age"
            placeholder="Enter student's age"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>Student gender</label>
          <input
            value={student.gender}
            type="text"
            className="form-control"
            name="gender"
            placeholder="Enter student's gender"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default EditStudent;
