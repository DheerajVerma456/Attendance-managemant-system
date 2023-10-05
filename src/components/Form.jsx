import React, {useState} from "react";

const Form = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  return (
    <div>
      <form className="form">
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            type="name"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <label className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <label className="form-label">Project</label>
          <input
            type="project"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <label className="form-label">Enrolled Date</label>
          <input
            type="date"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <label className="form-label">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="showPassword"
            checked={passwordVisible}
            value={password}
            onChange={togglePasswordVisibility}

          />
          <label className="form-check-label">Show Password</label>
        </div>
        <button type="add" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
