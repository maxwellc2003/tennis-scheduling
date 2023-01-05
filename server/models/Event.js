const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");
const dateFormat = require("../utils/dateFormat");

const EventSchema = new Schema(
  {
    eventDate: {
      type: String,
      required: true,
      maxlength: 8,
    },
    eventLocation: {
      type: String,
      required: true,
      maxlength: 24,
    },
    eventTime: {
      type: String,
      required: true,
      maxlength: 9,
      match: [/(0?[0-9]|1[0-9]|2[0-3])[a-zA-Z]-(0?[0-9]|1[0-9]|2[0-3])[a-zA-Z]/i, "Event time formatted incorrectly"]
    },
    eventMax: {
      type: Number,
      required: true,
      maxlength: 2,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

EventSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Event = model("Event", EventSchema);

module.exports = Event;
