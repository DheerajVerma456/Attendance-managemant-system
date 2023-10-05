import React, { useState } from 'react';

function UserForm3() {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: '',
    attendance: '',
    workedHours: '',
    workedStatus: '',
    workProgress: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
  };

  return (
    <div className="form mt-5">
      <h1>Work Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            name="userId"
            placeholder="User ID"
            value={formData.userId}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attendance" className="form-label">
            Attendance
          </label>
          <input
            type="text"
            className="form-control"
            id="attendance"
            name="attendance"
            placeholder="Attendance"
            value={formData.attendance}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="workedHours" className="form-label">
            Worked Hours
          </label>
          <input
            type="text"
            className="form-control"
            id="workedHours"
            name="workedHours"
            placeholder="Worked Hours"
            value={formData.workedHours}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="workedStatus" className="form-label">
            Worked Status
          </label>
          <input
            type="text"
            className="form-control"
            id="workedStatus"
            name="workedStatus"
            placeholder="Worked Status"
            value={formData.workedStatus}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="workProgress" className="form-label">
            Work Progress
          </label>
          <input
            type="text"
            className="form-control"
            id="workProgress"
            name="workProgress"
            placeholder="Work Progress"
            value={formData.workProgress}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn ">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserForm3;
