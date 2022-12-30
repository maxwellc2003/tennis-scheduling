import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import "../assets/css/signup.css"

import Auth from "../utils/auth";

const Signup = () => {
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
      <div class="signup-form">
        <h1>New User Registration</h1>
        <form>
          <input
            class="signup-input"
            type="text"
            id="input_1"
            placeholder="Example@email.com"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id=""
            placeholder="Verify Email Address"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id=""
            placeholder="Phone Number (Not Required)"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id="input_2"
            placeholder="First Name"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id="input_3"
            placeholder="Last Name (Not Required)"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id="input_4"
            placeholder="UTR Level (Not Required)"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id=""
            placeholder="USTA Level (Not Required)"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id="input_5"
            placeholder="Password"
          />
        </form>
        <form>
          <input
            class="signup-input"
            type="text"
            id=""
            placeholder="Password Verification"
          />
        </form>
        <div class="checkbox">
          <input type="checkbox" id="" value="" />
          We use cookies on our site to save data, do you accept?
        </div>
        <div class="checkbox">
          <input type="checkbox" id="" value="" />
          Would you like to recieve notifications?
        </div>
        <div class="checkbox">
          <input type="checkbox" id="" value="" />I accept the privacy terms
        </div>
        <div id="captchaBackground">
          <canvas id="captcha">captcha text</canvas>
          <input id="textBox" type="text" name="text" />
          <div id="buttons">
            <input id="submitButton" type="submit" />
            <button id="refreshButton" type="submit">
              Refresh
            </button>
          </div>
          <span id="output"></span>
        </div>
        <div class="signup-or-cancel">
          <button id="signup-button" class="signup-button" type="button">
            Sign Up
          </button>
          <button id="cancel-button" class="signup-button" type="button">
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signup;
