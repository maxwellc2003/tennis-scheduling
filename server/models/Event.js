const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const EventSchema = new Schema(
  {
    date: {
      type: String, 
      required: true,
    },
    location: {
      type: String, 
      required: true,
    },
    time: {
      type: String, 
      required: true,
    },
    max_players: {
      type: Number, 
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
      },
    username: {
        type: String,
        required: true,
      },
    reactions: [ reactionSchema ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of reactions
EventSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Event = model("Event", EventSchema);

module.exports = Event;