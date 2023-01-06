import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_EVENTS } from "../hooks/queries";

import "../assets/css/calendar.css";

import Login from "../components/Login";
import PlayerCard from "../components/PlayerCard";
import SessionForm from "../components/SessionForm";
import CalendarEvents from "../components/CalendarEvents";

import Auth from "../hooks/auth";

const Calendar = () => {
  const loggedIn = Auth.loggedIn();

  const { loading, data } = useQuery(QUERY_EVENTS);

  return (
    <main>
      <div className="main-left">
        <div className="calendar-wrapper">
          {loading ? <div>Loading...</div> : <CalendarEvents data={data} />}
        </div>
      </div>
      <div className="main-right">
        {!loggedIn && <Login />}
        {loggedIn && <PlayerCard />}
        {loggedIn && <SessionForm />}
      </div>
    </main>
  );
};

export default Calendar;
