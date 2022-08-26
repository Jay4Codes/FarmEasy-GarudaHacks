const mongoose = require("mongoose");
const { Schema } = mongoose;

const WasteSchema = new Schema({
  name: {
    type: String,
    required : true
  },
  price: {
    type: Number,
    // required : true
  },
  quantity : {
    type: Number,
    required: true,
  },
  file:
  {
    type: String,
    // required: true,
  },
});

const wastes = mongoose.model("wastes", WasteSchema);

module.exports = wastes;