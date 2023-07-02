import React from "react";

function AddStudent() {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="name">Student name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter student's name"
          />
        </div>
        <div className="mb-3">
          <label for="age">Student age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter student's age"
          />
        </div>
        <div className="mb-3">
          <label for="gender">Student gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter student's gender"
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
