import mongoose from 'mongoose';
// Documentation for mongoose
// https://mongoosejs.com/docs/guide.html

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection
// and defines the shape of the documents within that collection.
const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name',
  },
  lastName: {
    type: String,
    required: 'Enter a first name',
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
