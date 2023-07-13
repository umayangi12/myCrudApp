import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    age: 0,
    gender: "",
  });

  const { id } = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8070/student/getStudent/${id}`)
      .then((res) => {
        console.log(res)
        console.log(res.data)
        setStudent({
          name: res.data.student.name,
          age: res.data.student.age,
          gender: res.data.student.gender,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
        console.log(err);
      });
  }, [id]);

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: student.name,
      age: student.age,
      gender: student.gender,
    };

    axios
      .put(`http://localhost:8070/student/updateStudent/${id}`, data)
      .then((res) => {
        console.log(res);
        alert("Student updated sucessfully!")
        navigate('/')
      })
      .catch((err) => {
        alert("Error in update student ")
        console.log(err);
      });
  };

  return (
    <div className="container">
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
