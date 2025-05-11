const Event = require('../models/eventModel');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({
      createdAt: -1,
    });
    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const trackClick = async (req, res) => {
  const { email, eventId } = req.body;
  try {
    if (!email || !eventId) {
      return res.status(400).json({
        success: false,
        message: 'Email and eventId are required',
      });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not Found',
      });
    }
    res.status(200).json({
      success: true,
      redirectUrl: event.link,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllEvents,
  trackClick,
};
