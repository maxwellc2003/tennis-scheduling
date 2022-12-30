const router = require("express").Router();
const {
  getAllEvent,
  getEventById,
  addEvent,
  removeEvent,
  addReaction,
  removeReaction,
} = require("../../controllers/event-controller");

// Set up GET all and POST at /api/events
router.route("/").get(getAllEvent).post(addEvent);

// Set up GET one, PUT, and DELETE at /api/events/:id
router
  .route("/:id")
  .get(getEventById)
  .delete(removeEvent);

// post and delete reactions through an eventid
router.route("/:eventId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;