const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;