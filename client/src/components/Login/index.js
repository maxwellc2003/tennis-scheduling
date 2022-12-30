import React from "react";

import "../../assets/css/login.css"

const Login = () => {
  return (
    <div className="form-wrapper">
      <h1>Player Login/Register</h1>
      <div>
        <form>
          <input
            className="form-element email"
            type="text"
            id="email-login"
            placeholder="Email"
          />
        </form>
        <form>
          <input
            className="form-element password"
            type="text"
            id="password-login"
            placeholder="Password"
          />
        </form>
        <form className="remember-me">
          <div>
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              value="Boat"
            ></input>
            <label className="remember-me-label" htmlFor="remember-me">
              Remember Me
            </label>
          </div>
          <div>
            <p className="forgot-login">Forgot login?</p>
          </div>
        </form>

        <div className="login-wrapper-wrapper">
          <button
            id="login-button"
            className="button form-element"
            type="button"
          >
            Login
          </button>
          <button
            href="/signup"
            id="register-button"
            className="button form-element"
            type="button"
          > Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
