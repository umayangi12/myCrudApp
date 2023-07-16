import "./students.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8070/student/getAllStudents"
      );
      setStudents(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onDelete = async (_id) => {
    if (window.confirm("Are you sure that you want to delete this student?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8070/student/deleteStudent/${_id}`
        );
        console.log(response);
        if (response.status === 200) {
          alert(response.data.status);
          getAllStudents();
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">All Students</h1>
      <h4 className="display-8 text-center">Student Info</h4>
      <hr />
      <div className="card">
        <div className="card-title"></div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th style={{ textAlign: "center" }}>Number</th>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>Age</th>
                <th style={{ textAlign: "center" }}>Gender</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.gender}</td>
                      <td>
                        <Link to={`/updateStudent/${item._id}`}>
                          <button className="btn btn-edit">
                            <i className="bi bi-pencil-square"></i>
                            Edit
                          </button>
                        </Link>
                        <button
                          className="btn btn-delete"
                          onClick={() => onDelete(item._id)}
                        >
                          Delete
                        </button>
                        <Link to={`/getStudent/${item._id}`}>
                          <button className="btn btn-view">View</button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Link to={"/addStudent"}>
            <button className="btn btn-addStudent">Add Student</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
