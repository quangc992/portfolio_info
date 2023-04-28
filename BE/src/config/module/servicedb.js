const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const service = new Schama(
  {
    img: String,
    title: String,
    description: String,
    countProject: String,
    sort: Number,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    timezone: "Asia/Ho_Chi_Minh",
  }
);

module.exports = mongoose.model("service", service);
