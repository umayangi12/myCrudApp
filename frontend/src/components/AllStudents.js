import React, { useEffect, useState } from "react";
import axios from "axios";

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
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <h1>abcddd</h1>
              {students &&
                students.map((item) => {
  
                  <tr>
                    <h1>abcddd</h1>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>
                      <a className="btn btn-success">Edit</a>
                      <a className="btn btn-danger">Delete</a>
                      <a className="btn btn-primary">Details</a>
                    </td>
                  </tr>;
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
