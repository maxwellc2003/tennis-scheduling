import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../hooks/mutations";
import { QUERY_EVENTS, QUERY_ME } from "../../hooks/queries";
import moment from "moment";

import "../../assets/css/sessionform.css";

const EventForm = () => {
  const [formState, setFormState] = useState({
    month: "January",
    day: "01",
    eventLocation: "",
    startTime: "4:00am",
    endTime: "4:00am",
    eventMax: "01",
  });

  const [addEvent, { error }] = useMutation(ADD_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, events: [...me.events, addEvent] } },
        });
      } catch (err) {
        console.warn("First event post by this user!");
      }

      const { events } = cache.readQuery({ query: QUERY_EVENTS });
      cache.writeQuery({
        query: QUERY_EVENTS,
        data: { events: [addEvent, ...events] },
      });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const year = moment().format("yy").slice(2, 4);

    const eventDate = formState.month + "/" + formState.day + "/" + year;
    const eventTime = formState.startTime + "-" + formState.endTime;
    const eventLocation = formState.eventLocation;
    const eventMax = parseInt(formState.eventMax);

    console.log(eventDate, eventTime, eventLocation, eventMax)

    try {
      await addEvent({
        variables: { eventDate, eventLocation, eventTime, eventMax },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="post-form-wrapper">
      <h1>Add Session</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="sessionEl">
          <h4>Date:</h4>
          <div className="sessionFormOption">
            <select name="month" value={formState.month} onChange={handleChange}>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select name="day" value={formState.day} onChange={handleChange}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
        </div>
        <div className="sessionEl">
          <h4>Start Time:</h4>
          <div className="sessionFormOption">
            <select name="startTime" value={formState.startTime} onChange={handleChange}>
              <option value="4:00am">4:00am</option>
              <option value="4:15am">4:15am</option>
              <option value="4:30am">4:30am</option>
              <option value="4:45am">4:45am</option>
              <option value="5:00am">5:00am</option>
              <option value="5:15am">5:15am</option>
              <option value="5:30am">5:30am</option>
              <option value="5:45am">5:45am</option>
              <option value="6:00am">6:00am</option>
              <option value="6:15am">6:15am</option>
              <option value="6:30am">6:30am</option>
              <option value="6:45am">6:45am</option>
              <option value="7:00am">7:00am</option>
              <option value="7:15am">7:15am</option>
              <option value="7:30am">7:30am</option>
              <option value="7:45am">7:45am</option>
              <option value="8:00am">8:00am</option>
              <option value="8:15am">8:15am</option>
              <option value="8:30am">8:30am</option>
              <option value="8:45am">8:45am</option>
              <option value="9:00am">9:00am</option>
              <option value="9:15am">9:15am</option>
              <option value="9:30am">9:30am</option>
              <option value="9:45am">9:45am</option>
              <option value="10:00am">10:00am</option>
              <option value="10:15am">10:15am</option>
              <option value="10:30am">10:30am</option>
              <option value="10:45am">10:45am</option>
              <option value="11:00am">11:00am</option>
              <option value="11:15am">11:15am</option>
              <option value="11:30am">11:30am</option>
              <option value="11:45am">11:45am</option>
              <option value="12:00pm">12:00pm</option>
              <option value="12:15pm">12:15pm</option>
              <option value="12:30pm">12:30pm</option>
              <option value="12:45pm">12:45pm</option>
              <option value="1:00pm">1:00pm</option>
              <option value="1:15pm">1:15pm</option>
              <option value="1:30pm">1:30pm</option>
              <option value="1:45pm">1:45pm</option>
              <option value="2:00pm">2:00pm</option>
              <option value="2:15pm">2:15pm</option>
              <option value="2:30pm">2:30pm</option>
              <option value="2:45pm">2:45pm</option>
              <option value="3:00pm">3:00pm</option>
              <option value="3:15pm">3:15pm</option>
              <option value="3:30pm">3:30pm</option>
              <option value="3:45pm">3:45pm</option>
              <option value="4:00pm">4:00pm</option>
              <option value="4:15pm">4:15pm</option>
              <option value="4:30pm">4:30pm</option>
              <option value="4:45pm">4:45pm</option>
              <option value="5:00pm">5:00pm</option>
              <option value="5:15pm">5:15pm</option>
              <option value="5:30pm">5:30pm</option>
              <option value="5:45pm">5:45pm</option>
              <option value="6:00pm">6:00pm</option>
              <option value="6:15pm">6:15pm</option>
              <option value="6:30pm">6:30pm</option>
              <option value="6:45pm">6:45pm</option>
              <option value="7:00pm">7:00pm</option>
              <option value="7:15pm">7:15pm</option>
              <option value="7:30pm">7:30pm</option>
              <option value="7:45pm">7:45pm</option>
              <option value="8:00pm">8:00pm</option>
              <option value="8:15pm">8:15pm</option>
              <option value="8:30pm">8:30pm</option>
              <option value="8:45pm">8:45pm</option>
              <option value="9:00pm">9:00pm</option>
              <option value="9:15pm">9:15pm</option>
              <option value="9:30pm">9:30pm</option>
              <option value="9:45pm">9:45pm</option>
              <option value="10:00pm">10:00pm</option>
              <option value="10:15pm">10:15pm</option>
              <option value="10:30pm">10:30pm</option>
              <option value="10:45pm">10:45pm</option>
              <option value="11:00pm">11:00pm</option>
              <option value="11:15pm">11:15pm</option>
              <option value="11:30pm">11:30pm</option>
              <option value="11:45pm">11:45pm</option>
            </select>
          </div>

          <h4>End Time:</h4>
          <div className="sessionFormOption">
            <select name="endTime" value={formState.endTime} onChange={handleChange}>
              <option value="4:00am">4:00am</option>
              <option value="4:15am">4:15am</option>
              <option value="4:30am">4:30am</option>
              <option value="4:45am">4:45am</option>
              <option value="5:00am">5:00am</option>
              <option value="5:15am">5:15am</option>
              <option value="5:30am">5:30am</option>
              <option value="5:45am">5:45am</option>
              <option value="6:00am">6:00am</option>
              <option value="6:15am">6:15am</option>
              <option value="6:30am">6:30am</option>
              <option value="6:45am">6:45am</option>
              <option value="7:00am">7:00am</option>
              <option value="7:15am">7:15am</option>
              <option value="7:30am">7:30am</option>
              <option value="7:45am">7:45am</option>
              <option value="8:00am">8:00am</option>
              <option value="8:15am">8:15am</option>
              <option value="8:30am">8:30am</option>
              <option value="8:45am">8:45am</option>
              <option value="9:00am">9:00am</option>
              <option value="9:15am">9:15am</option>
              <option value="9:30am">9:30am</option>
              <option value="9:45am">9:45am</option>
              <option value="10:00am">10:00am</option>
              <option value="10:15am">10:15am</option>
              <option value="10:30am">10:30am</option>
              <option value="10:45am">10:45am</option>
              <option value="11:00am">11:00am</option>
              <option value="11:15am">11:15am</option>
              <option value="11:30am">11:30am</option>
              <option value="11:45am">11:45am</option>
              <option value="12:00pm">12:00pm</option>
              <option value="12:15pm">12:15pm</option>
              <option value="12:30pm">12:30pm</option>
              <option value="12:45pm">12:45pm</option>
              <option value="1:00pm">1:00pm</option>
              <option value="1:15pm">1:15pm</option>
              <option value="1:30pm">1:30pm</option>
              <option value="1:45pm">1:45pm</option>
              <option value="2:00pm">2:00pm</option>
              <option value="2:15pm">2:15pm</option>
              <option value="2:30pm">2:30pm</option>
              <option value="2:45pm">2:45pm</option>
              <option value="3:00pm">3:00pm</option>
              <option value="3:15pm">3:15pm</option>
              <option value="3:30pm">3:30pm</option>
              <option value="3:45pm">3:45pm</option>
              <option value="4:00pm">4:00pm</option>
              <option value="4:15pm">4:15pm</option>
              <option value="4:30pm">4:30pm</option>
              <option value="4:45pm">4:45pm</option>
              <option value="5:00pm">5:00pm</option>
              <option value="5:15pm">5:15pm</option>
              <option value="5:30pm">5:30pm</option>
              <option value="5:45pm">5:45pm</option>
              <option value="6:00pm">6:00pm</option>
              <option value="6:15pm">6:15pm</option>
              <option value="6:30pm">6:30pm</option>
              <option value="6:45pm">6:45pm</option>
              <option value="7:00pm">7:00pm</option>
              <option value="7:15pm">7:15pm</option>
              <option value="7:30pm">7:30pm</option>
              <option value="7:45pm">7:45pm</option>
              <option value="8:00pm">8:00pm</option>
              <option value="8:15pm">8:15pm</option>
              <option value="8:30pm">8:30pm</option>
              <option value="8:45pm">8:45pm</option>
              <option value="9:00pm">9:00pm</option>
              <option value="9:15pm">9:15pm</option>
              <option value="9:30pm">9:30pm</option>
              <option value="9:45pm">9:45pm</option>
              <option value="10:00pm">10:00pm</option>
              <option value="10:15pm">10:15pm</option>
              <option value="10:30pm">10:30pm</option>
              <option value="10:45pm">10:45pm</option>
              <option value="11:00pm">11:00pm</option>
              <option value="11:15pm">11:15pm</option>
              <option value="11:30pm">11:30pm</option>
              <option value="11:45pm">11:45pm</option>
            </select>
          </div>
        </div>
        <div className="sessionEl">
          <h4>Location:</h4>
          <div className="sessionFormOption">
            <input
              name="eventLocation"
              type="text"
              id="eventLocation"
              value={formState.eventLocation}
              onChange={handleChange}
              placeholder="Maximum 24 Characters"
            />
          </div>
        </div>
        <div className="sessionEl">
          <h4>Maximum Players:</h4>
          <div className="sessionFormOption">
            <select name="eventMax" value={formState.eventMax} onChange={handleChange}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
            </select>
          </div>
        </div>
        <button className="sessionSubmit" type="submit">
          Submit
        </button>
      </form>
      {error && <span>Something went wrong...</span>}
    </div>
  );
};

export default EventForm;
