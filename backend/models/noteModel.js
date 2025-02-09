const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
     required: true
     },
  title: {
     type: String,
      required: true
     },
  content: {
     type: String,
   },
  image: {
     type: Buffer,
     default: "" 
    }, // Stores the image URL
  isFavorite: {
     type: Boolean,
      default: false 
    },
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
