import React from 'react'

const AdminAttendanceProject = () => {
  return (
    <div>
        <h2>Attendance %</h2>
      <div className="mb-3">
          <label className="form-label">User 1 :</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User 2 :</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User 3 :</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
    </div>
  )
}

export default AdminAttendanceProject
