const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    content: {
        type: String,
        required: true 
    },
  date: { type: Date, default: new Date() },
}, {timestamps: true});

module.exports = mongoose.model('Note', notesSchema);