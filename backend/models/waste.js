const mongoose = require("mongoose");
const { Schema } = mongoose;

const WasteSchema = new Schema({
  name: {
    type: String,
    required : true
  },
  price: {
    type: Number,
    required : true
  },
  quantity : {
    type: Number,
    required: true,
  },
  file:
  {
    type: String,
    required: true,
  },
});

const waste = mongoose.model("expert", WasteSchema);

module.exports = waste;