const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const about = new Schama(
  {
    title: String,
    description: String,
    isUse: Boolean,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    timezone: "Asia/Ho_Chi_Minh",
  }
);

module.exports = mongoose.model("about", about);
