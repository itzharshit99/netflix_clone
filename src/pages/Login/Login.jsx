import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="your email" />
          <input type="password" placeholder="your password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "Sign In" ? (
            <p>
              New to Netflix <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already Have Account <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
