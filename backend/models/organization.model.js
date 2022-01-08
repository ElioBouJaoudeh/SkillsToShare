const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orgSchema = new Schema({
  orgname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  address: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  fax : { type: Number, required: true},
  number : { type: Number, required: true},
  website: { type: String, required: true},
}, {
  timestamps: true,
});

const Organization = mongoose.model('Organization', orgSchema);

module.exports = Organization;