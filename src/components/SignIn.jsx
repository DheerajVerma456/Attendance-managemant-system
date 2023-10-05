import { Link, useNavigate } from "react-router-dom"

const SignIn = ({ title , onclick}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="signindiv">
        <div className="signinTitle ">
          <h1>{title} Login</h1>
        </div>
        <div className="overall">
          <div className="signinHead">
            <h2>Sign In</h2>
            <div>
              <h5>Please enter your details</h5>
            </div>
          </div>
          <div className=" signinForm">
            <form action="" className="form">
              <label>{title} Id:</label>
              <br />
              <div className="field signinbutton">
                <input
                  type="text"
                  id="adminid"
                  name="adminid"
                  className="custom-input"
                />
              </div>
              <br />
              <label>Password:</label>
              <br />
              <div className="field signinbuttton ">
                <input
                  type="password"
                  id="adminpass"
                  name="pass"
                  className="custom-input"
                />
              </div>
              <br />
              <button className="signinbutton1" onClick={() => navigate("/administratoruser")}>Sign In</button>
              <a
                href="https://accounts.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="signinbutton2">Sign In with Google</button>
              </a>
              <div className="form-link">
                <span>
                  Dont have an account?{" "}
                  <a href="signup.html" target="_blank">
                    SignUp
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
