// models/Book.js
import mongoose from 'mongoose';

// Book Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  availableCopies: {
    type: Number,
    required: true,
    min: 0
  },
  publishedDate: {
    type: Date,
    default: Date.now
  }
});

// Book Model
const Book = mongoose.model('Book', bookSchema);

export default Book;
