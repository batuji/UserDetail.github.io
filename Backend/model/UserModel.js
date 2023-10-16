const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  address: {
    street: {
      type: String,
    },
    suite: {
      type: String,
    },
    city: {
      type: String,
    },
    zipcode: {
      type: String,
    },
  },
  company: {
    name: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
    bs: {
      type: String,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
