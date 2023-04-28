const mongoose = require("mongoose");

const Schama = mongoose.Schema;

const info = new Schama(
  {
    designation: String,
    email: String,
    address: String,
    copyright: String,
    imgLogo: String,
    imgAvatar: String,
    facebook: String,
    twitter: String,
    dribbble: String,
    github: String,
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

module.exports = mongoose.model("info", info);
