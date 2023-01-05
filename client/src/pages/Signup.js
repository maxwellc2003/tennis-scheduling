import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../hooks/mutations";

import "../assets/css/signup.css";
import "../assets/css/captcha.css";
import randomText from "../hooks/randomText";

import Auth from "../hooks/auth";

const Signup = () => {
  // captcha
  const [captchaComplete, setCaptchaComplete] = useState(false);
  const [captchaText, setCaptchaText] = useState(randomText());
  const [inputText, setInputText] = useState("");
  const [correctText, setBottomText] = useState("");
  const [captchaState, setCaptchaState] = useState(false);

  const captchaChange = (event) => {
    const { name, value } = event.target;

    setInputText(value);
  };

  const captchaSubmit = () => {
    if (inputText === "") {
      setBottomText("Type your guess.");
      return;
    }

    if (inputText == captchaText) {
      setCaptchaState(true);
      setBottomText("Correct!");
    } else {
      setCaptchaState(false);
      setInputText("");
      setBottomText("Incorrect.");
    }
  };

  // mutation
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  // privacy terms agreement
  const [agreement, setAgreement] = useState(false);

  // formstate initialised
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phone: "",
    first: "",
    last: "",
    utr: "",
    usta: "",
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

    if (correctText === "Correct!") {
    try {
      const { data } = await addUser({
        variables: {
          ...formState,
          usta: parseInt(formState.usta),
          utr: parseInt(formState.utr),
        },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    } else {
      setBottomText("Captcha incomplete.")
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
          {/* <input
            className="signup-input"
            type="text"
            placeholder="Verify Email"
          /> */}
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
          {/* <input
            className="signup-input"
            type="text"
            placeholder="Password Verification"
          /> */}
          <div className="signup-input">
            <input type="checkbox" id="checkbox1" value="" />
            Would you like to recieve notifications? (Coming Soon)
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
          <div id="captchaBackground">
            <div id="captcha">{captchaText}</div>
            <input
              id="textBox"
              type="text"
              name="userText"
              value={inputText}
              onChange={captchaChange}
            />
            <div id="buttons">
              <button
                onClick={() => captchaSubmit()}
                id="submitButton"
                type="button"
              >
                Submit
              </button>
              <button
                onClick={() => (
                  setInputText(""),
                  setBottomText(""),
                  setCaptchaText(randomText())
                )}
                id="refreshButton"
                type="button"
              >
                Refresh
              </button>
            </div>
            {correctText}
          </div>
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
        {loading && <div>Loading...</div>}
        {error && <div>Signup failed</div>}
      </div>
    </main>
  );
};

export default Signup;
