import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../hooks/mutations";
import { QUERY_EVENTS, QUERY_ME } from "../../hooks/queries";

import "../../assets/css/postform.css";

const EventForm = () => {
  const [{ eventDate, eventLocation, eventTime, eventMax }, setText] = useState(
    {}
  );

  const [addEvent, { error}] = useMutation(ADD_EVENT, {
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
    
    try {
      await addEvent({
        variables: { eventDate, eventLocation, eventTime, eventMax },
      });

      setText({
        eventDate: "",
        eventLocation: "",
        eventTime: "",
        eventMax: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="post-form-wrapper">
      <form className="post-form" onSubmit={handleSubmit}>
        <h1>Add Session</h1>
        <div className="post-form-el">
        <h3>Date of session</h3>
          <textarea
            placeholder="Must format: (MM/DD/YY)"
            value={eventDate}
            name="eventDate"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="post-form-el">
        <h3>Location of session</h3>
          <textarea
            placeholder="Maximum 24 characters (Orchard Park)"
            value={eventLocation}
            name="eventLocation"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="post-form-el">
          <h3>Time of session</h3>
          <textarea
            placeholder="Maximum 9 characters (12pm-3pm)"
            value={eventTime}
            name="eventTime"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="post-form-el">
          <h3>Maximum players permitted</h3>
          <textarea
            placeholder="Maximum 2 characters (00...99)"
            value={eventMax}
            name="eventMax"
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="button form-element post-form-el" type="submit">
          Submit
        </button>
      </form>
      {error && <span>Something went wrong...</span>}
    </div>
  );
};

export default EventForm;
