import React, { useState } from "react";

import "../../assets/css/postform.css";

//Other important stuff
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../utils/mutations";
import { QUERY_EVENTS, QUERY_ME } from "../../utils/queries";

const EventForm = () => {
  const [{eventDate, eventLocation, eventTime, eventMax}, setText] = useState("");

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

    try {
      await addEvent({
        variables: { eventDate, eventLocation, eventTime, eventMax },
      });

      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="post-form-wrapper">
      <form
        className="post-form"
        onSubmit={handleSubmit}
      >
        <h1>Add Session</h1>
        <textarea
          className="post-form-el"
          placeholder="Date of session(MM/DD/YY)"
          value={eventDate}
        ></textarea>
        <textarea
          className="post-form-el"
          placeholder="Location of event(Maximum 12 characters)"
          value={eventLocation}
        ></textarea>
        <textarea
          className="post-form-el"
          placeholder="Time of session"
          value={eventTime}
        ></textarea>
        <textarea
          className="post-form-el"
          placeholder="Maximum players permitted"
          value={eventMax}
        ></textarea>
        <button className="button form-element post-form-el" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
