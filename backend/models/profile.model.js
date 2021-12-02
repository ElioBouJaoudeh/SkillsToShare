const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  last_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  city : { type: String, required: true },
  street : { type: String, required: true },
  country: { type: String, required: true },
}, {
  timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;