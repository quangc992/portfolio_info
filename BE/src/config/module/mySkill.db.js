const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const mySkill = new Schama(
  {
    img: String,
    rate: String,
    description: String,
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

module.exports = mongoose.model("mySkill", mySkill);
