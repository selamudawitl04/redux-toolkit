const mongoose = require("mongoose");

// - Defines the structure of the data that will be stored in MongoDB collection.
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// - Create a model 'User' based on the 'userSchema' :- this in turn provides an interface with documents(data) in that collection, such as 'find', 'insert' etc.
module.exports = mongoose.model("User", userSchema);
