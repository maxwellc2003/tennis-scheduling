import React, { useEffect, useState } from "react";

// We can add more character to this

import initCalendar from "../../assets/js/calendar.js";

const CalendarEvents = (data) => {
  const [number, setNumber] = useState(Math.random)

  useEffect(() => {
    initCalendar(data.data.events);
  }, [number]);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-header-left">
          <div className="dropdown">
            <button id="dropdownBtn" className="dropbtn">
              Jump To
            </button>
            <div id="myDropdown" className="dropdown-content">
              <form>
                <label htmlFor="months">Month</label>
                <select className="months" id="month" name="months">
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
                <input
                  className=""
                  type="text"
                  id="day"
                  placeholder="Day (01...31)"
                />
                <button id="jumpToBtn" className="jumpToBtn">
                  Go
                </button>
              </form>
            </div>
          </div>
          {/* <i className="help-button material-icons" style="font-size:36px">
                  help_outline
                </i> */}
        </div>
        <div className="calendar-header-date">
          <i onClick={() => setNumber(Math.random)} id="arrow-left" className="arrow left"></i>
          <h1 id="current-week-header" className="current-week">
            placeholder
          </h1>
          <i onClick={() => setNumber(Math.random)} id="arrow-right" className="arrow right"></i>
        </div>

        <div className="dropdown2">
          <button id="dropdownBtn2" className="dropbtn2" type="button">
            Filter
          </button>
          <div id="myDropdown2" className="dropdown-content2">
            <form>
              <label htmlFor="locations">Choose a Location:</label>
              <select name="locations" id="location"></select>
              <button id="filterBtn" className="filterBtn">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="calendar-content">
        <div className="calendar-row">
          <div id="weekDay1" className="week-day"></div>
          <div id="eventContainer1" className="event-container"></div>
        </div>
        <div className="calendar-row">
          <div id="weekDay2" className="week-day"></div>
          <div id="eventContainer2" className="event-container"></div>
        </div>
        <div className="calendar-row">
          <div id="weekDay3" className="week-day"></div>
          <div id="eventContainer3" className="event-container"></div>
        </div>
        <div className="calendar-row">
          <div id="weekDay4" className="week-day"></div>
          <div id="eventContainer4" className="event-container"></div>
        </div>
        <div className="calendar-row">
          <div id="weekDay5" className="week-day"></div>
          <div id="eventContainer5" className="event-container"></div>
        </div>
        <div className="calendar-row">
          <div id="weekDay6" className="week-day"></div>
          <div id="eventContainer6" className="event-container"></div>
        </div>
        <div className="calendar-row">
          <div id="weekDay7" className="week-day"></div>
          <div id="eventContainer7" className="event-container"></div>
        </div>
      </div>
      <div className="calendar-footer">
        <div className="calendar-footer-date">
          <i onClick={() => setNumber(Math.random)} id="arrow-left1" className="arrow left"></i>
          <h1 id="current-week-footer" className="current-week">
            placeholder
          </h1>
          <i onClick={() => setNumber(Math.random)} id="arrow-right1" className="arrow right"></i>
        </div>
      </div>
    </div>
  );
};

export default CalendarEvents;
