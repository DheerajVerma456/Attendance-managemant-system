import React from 'react'

const UserForm2 = () => {
  return (
    <div className="container form mt-5">
      <h1>Registration Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input type="text" className="form-control" id="id" placeholder="Your ID" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input type="tel" className="form-control" id="phoneNumber" placeholder="Your Phone Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Your Password" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="enrolledDate" className="form-label">
            Enrolled Date
          </label>
          <input type="date" className="form-control" id="enrolledDate" />
        </div>
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">
            Project Name
          </label>
          <input type="text" className="form-control" id="projectName" placeholder="Your Project Name" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default UserForm2
