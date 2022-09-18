const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
  state_province: {
    type: String,
    required: false,
    alias: 'state-province',
  },
});

universitySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('universities', universitySchema);
