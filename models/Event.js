const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 //Not complete
const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;