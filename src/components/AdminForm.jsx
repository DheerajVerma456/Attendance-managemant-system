import {useState} from "react";

const AdminForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  return (
    <div>
      <form className="form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            type="id"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date Of Birth</label>
          <input
            type="date"
            className="form-control"
            id="exampleInputPassword1"
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

export default AdminForm;
