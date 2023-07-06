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
        }
        getAllStudents();
    }, [])


  return (
    <div className="container">
      <h1>All Students</h1>
    </div>
  );
}
