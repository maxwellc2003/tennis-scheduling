import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../hooks/mutations";
import Auth from "../../hooks/auth";
import { Link } from "react-router-dom";

import "../../assets/css/login.css";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-wrapper">
      <h1>Player Login/Register</h1>
      <div>
        <form onSubmit={handleFormSubmit} className="login-form">
          <input
            className="form-element email"
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-element password"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="remember-or-forgot">
            <div>
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
              ></input>
              <label className="remember-me-label" htmlFor="remember-me">
                Remember Me
              </label>
            </div>
            <div>
              <p className="forgot-login">Forgot login?</p>
            </div>
          </div>
          <div className="login-form-button-container">
            <button
              id="login-button"
              className="login-form-button"
              type="submit"
            >
              Login
            </button>
            <Link to="/signup" className="login-form-button">
              Register
            </Link>
          </div>
        </form>
        {error && <div>Login unsuccessful</div>}
      </div>
    </div>
  );
};

export default Login;
