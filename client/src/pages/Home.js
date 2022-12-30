import React from "react";

import Slider from "../components/Slider";
import Login from "../components/Login";

const Home = () => {
  return (
    <main>
      <div className="front-page-main">
        <div className="front-page-main-left">
          <h2>
            <strong>Tennis Scheduling(Beta)</strong> is a free scheduling tool
            created to bring the tennis community together!
          </h2>
          <h3>
            Join the Tennis Scheduling community to find and schedule events
            with local players. No more showing up to empty tennis courts or
            struggling to find people to play with.
          </h3>
          <h3>With TennisScheduling.com you can:</h3>
          <ul>
            <li>Quickly sign up for a session in seconds </li>
            <li>Organize meetups by skill level</li>
            <li>Find nearby courts and events…FAST!</li>
            <li>See who will be attending each session</li>
            <li>Facilitate genuine community</li>
            <li>
              And many more benefits and features to come as we continuously
              upgrade and innovate with community feedback and ideas
            </li>
          </ul>
          <h2>To get started...</h2>
          <ul>
            <li>Start by creating an account</li>
            <li>
              Or just head straight to the <a href="/calendar">calendar</a> and
              get playing!
            </li>
          </ul>
          <h2>Features under development:</h2>
          <ul>
            <li>Player Card Information</li>
            <li>Mobile use and features</li>
            <li>Ease of use</li>
            <li>Match Tracking Capabilities</li>
            <li>
              Ability to add friends and communicate directly through scheduling
              app!
            </li>
            <li>
              More flexible specifications for each created session and the
              ability to create invite only sessions
            </li>
            <li>Post notifications!</li>
          </ul>
        </div>
      </div>
      <div className="main-right">
        <Login />
        <Slider />
      </div>
    </main>
  );
};

export default Home;
