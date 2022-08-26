const mongoose = require("mongoose");
const { Schema } = mongoose;

const FarmerSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  token: {
    type: Number
  }
});

const farmers = mongoose.model("farmers", FarmerSchema);

module.exports = farmers;