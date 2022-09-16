const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  domains: [{
    type: String,
    required: true,
  }],
  alpha_two_code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  web_pages: [{
    type: String,
    required: true,
  }],
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('universities', universitySchema);
