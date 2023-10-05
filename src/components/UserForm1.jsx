import React from "react";

const UserForm1 = () => {
  return (
    <form className="form">
      <div className="mb-3 form-group">
        <label  className="control-label" htmlFor="exampleInputEmail1" >
          College Name :
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3 form-group">
        <label className="control-label" htmlFor="exampleInputPassword1" >
          College Roll Name :
        </label>
        <input
          type="rollname"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-group">
        <label className="control-label" htmlFor="collegeName" >
          Aadhar Name :
        </label>
        <input type="text" className="form-control" id="collegeName" />
      </div>
      <div className="mb-3 form-group">
        <label className="control-label" htmlFor="collegeRoll" >
          Date Of Birth
        </label>
        <input type="text" className="form-control" id="collegeRoll" />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default UserForm1;
