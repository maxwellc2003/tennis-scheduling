import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import "../assets/css/signup.css";
import initCaptcha from "../assets/js/captcha.js";
import Captcha from "../components/Captcha";

import Auth from "../utils/auth";

const Signup = () => {
  useEffect(() => {
    initCaptcha();
  }, []);

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state
  const handleChange = (event) => {
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
            placeholder="Example@email.com"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            id=""
            placeholder="Verify Email Address"
          />
          <input
            className="signup-input"
            type="text"
            id=""
            placeholder="Phone Number (Not Required)"
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
            id=""
            placeholder="First Name"
          />
          <input
            className="signup-input"
            type="text"
            id=""
            placeholder="Last Name (Not Required)"
          />
          <input
            className="signup-input"
            type="text"
            id=""
            placeholder="UTR Level (Not Required)"
          />
          <input
            className="signup-input"
            type="text"
            id=""
            placeholder="USTA Level (Not Required)"
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
            id=""
            placeholder="Password Verification"
          />
        
        <div className="checkbox">
          <input type="checkbox" id="" value="" />
          We use cookies on our site to save data, do you accept?
        </div>
        <div className="checkbox">
          <input type="checkbox" id="" value="" />
          Would you like to recieve notifications?
        </div>
        <div className="checkbox">
          <input type="checkbox" id="" value="" />I accept the privacy terms
        </div>
        <Captcha />
        <div className="signup-or-cancel">
          <button id="signup-button" className="signup-button" type="submit">
            Sign Up
          </button>
          <button id="cancel-button" className="signup-button" type="button">
            Cancel
          </button>
        </div>
        </form>
        {error && <div>Signup failed</div>}
      </div>
    </main>
  );
};

export default Signup;
