const { Event, User } = require("../models");

const eventController = {
  // get all events
  getAllEvent(req, res) {
    Event.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get event by id
  getEventById({ params }, res) {
    Event.findOne({ _id: params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No event found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // add a event
  addEvent({ params, body }, res) {
    Event.create(body)
      .then((eventData) => {
        return User.findOneAndUpdate(
          { username: body.username },
          { $push: { events: eventData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(body);
      })
      .catch((err) => res.json(err));
  },

  // add reaction to a comment
  addReaction({ params, body }, res) {
    Event.findOneAndUpdate(
      { _id: params.eventId },
      { $push: { reactions: body } },
      { new: true }
    )
      .then((eventData) => {
        if (!eventData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(eventData);
      })
      .catch((err) => res.json(err));
  },

  // remove reaction from comment
  removeReaction({ params, body }, res) {
    Event.findOneAndUpdate(
      { _id: params.eventId },
      { $pull: { reactions: { _id: body.reactionId } } },
      { new: true }
    )
      .then((eventData) => res.json(eventData))
      .catch((err) => res.json(err));
  },

  // delete a event
  removeEvent({ params }, res) {
    Event.findOneAndDelete({ _id: params.id })
      .then((eventData) => {Event
        if (!eventData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(eventData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = eventController;
