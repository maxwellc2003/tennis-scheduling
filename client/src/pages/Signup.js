import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../hooks/mutations";

import "../assets/css/signup.css";
import Captcha from "../components/Captcha";

import Auth from "../hooks/auth";

const Signup = () => {
  // mutation
  const [addUser, { error }] = useMutation(ADD_USER);

  // privacy terms agreement
  const [agreement, setAgreement] = useState(false);

  // formstate initialised
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phone: "",
    first: "",
    last: "",
    utr: 0,
    usta: 0,
    password: "",
  });

  // update state
  const handleChange = (event) => {
    setAgreement(event.target.checked);

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="signup-form-container">
        <h1>New User Registration</h1>
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <input
            className="signup-input"
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Verify Email"
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Phone Number (Optional)"
            value={formState.phone}
            name="phone"
            id="phone"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            name="username"
            type="username"
            id="username"
            placeholder="Username"
            value={formState.username}
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="First Name"
            value={formState.first}
            name="first"
            id="first"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Last Name"
            value={formState.last}
            name="last"
            id="last"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="number"
            placeholder="UTR Level (Optional)"
            value={formState.utr}
            name="utr"
            id="utr"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="number"
            placeholder="USTA Level (Optional)"
            value={formState.usta}
            name="usta"
            id="usta"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Password Verification"
          />
          <div className="signup-input">
            <input type="checkbox" id="checkbox1" value="" />
            Would you like to recieve notifications?
          </div>
          <div className="signup-input">
            <input
              type="checkbox"
              id="checkbox3"
              name="agreement"
              onChange={handleChange}
            />
            I accept the privacy terms
          </div>
          <Captcha />
          <div className="signup-or-cancel">
            <button
              disabled={!agreement}
              id="signup-button"
              className="signup-button"
              type="submit"
            >
              Sign Up
            </button>
            <Link to="/" id="cancel-button" className="signup-button">
              Cancel
            </Link>
          </div>
        </form>
        {error && <div>Signup failed</div>}
      </div>
    </main>
  );
};

export default Signup;
