import './students.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = () => {
      axios
        .get("http://localhost:8000/student/")
        .then((res) => {
          console.log(res);
          console.log(res.data);

          setStudents(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getAllStudents();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1>All Students</h1>
        </div>
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
                            <i class="bi bi-pencil-square"></i>
                            Edit
                          </button>
                        </Link>
                        <button className="btn btn-delete">Delete</button>
                        <Link to={`/getStudent/${item._id}`}>
                          <button className="btn btn-view">View</button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
