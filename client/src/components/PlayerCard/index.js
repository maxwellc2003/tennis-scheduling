import React from "react";

import Auth from "../../hooks/auth";

import "../../assets/css/playercard.css";

const PlayerCard = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="form-wrapper">
      <h1>...Coming Soon</h1>
      <div className="border"></div>
      <h2>Welcome, Player!</h2>
      <div className="border"></div>
      <button id="logout-button" className="button form-element" type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default PlayerCard;
