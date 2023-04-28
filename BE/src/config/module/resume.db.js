const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const resume = new Schama(
  {
    intro: String,
    description: [],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    timezone: "Asia/Ho_Chi_Minh",
  }
);

module.exports = mongoose.model("resume", resume);
