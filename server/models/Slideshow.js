const mongoose = require("mongoose");

const SlideshowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("Slideshow", SlideshowSchema)