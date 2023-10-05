import React from "react";

const AdminUser = () => {
  return (
    <div>
      <form className="form">
        <div className="mb-3">
          <label className="form-label">User ID :</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User Project :</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Attendance % :</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            defaultChecked
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Months
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Days
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio3">
            Years
          </label>
        </div>
      </form>
    </div>
  );
};

export default AdminUser;
