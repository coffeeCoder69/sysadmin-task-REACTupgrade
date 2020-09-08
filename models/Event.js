const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 
const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const Event = mongoose.model("Event", EventSchema);

module.exports = User;