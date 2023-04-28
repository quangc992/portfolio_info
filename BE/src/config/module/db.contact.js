const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const contact = new Schama(
  {
    title: String,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    timezone: "Asia/Ho_Chi_Minh",
  }
);

module.exports = mongoose.model("contact", contact);
