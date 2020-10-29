const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemCost: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
});

module.exports = Content = mongoose.model("content", ContentSchema);
