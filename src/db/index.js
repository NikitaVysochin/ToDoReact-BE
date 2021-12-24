const mongoose = require("mongoose");

const { Schema } = mongoose;  

const taskScheme = new Schema({
  taskName: String,
  isCheck: Boolean,
});

module.exports = Task = mongoose.model("user", taskScheme);