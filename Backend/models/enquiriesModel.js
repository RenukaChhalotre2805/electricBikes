const mongoose = require("mongoose");
const enquiriesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },

  phone: {
    type: Number,
    required: false,
  },
  message: {
    type: String,
    required: [true, "Please enter your suggestion/query."],
    trim: true,
  },
  //   enquiry: { type: mongoose.Schema.ObjectId, ref: "Enquiry", required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Enquiry", enquiriesSchema);
