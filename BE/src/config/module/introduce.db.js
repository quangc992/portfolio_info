const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const introduce = new Schama(
  {
    intro: String,
    introSmall: String,
    expYear: String,
    expIntro: String,
    countriesCount: String,
    countriesIntro: String,
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

module.exports = mongoose.model("introduce", introduce);
