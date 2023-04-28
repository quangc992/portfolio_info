const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const testimonial = new Schama(
  {
    title: String,
    content: [],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    timezone: "Asia/Ho_Chi_Minh",
  }
);

module.exports = mongoose.model("testimonial", testimonial);
