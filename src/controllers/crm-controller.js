import mongoose from 'mongoose';
import { ContactSchema } from '../models/crm-model';

// https://mongoosejs.com/docs/models.html
const Contact = mongoose.model('Contact', ContactSchema);

// These functions will get passed to the routes

// Add Contact
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send;
    }
    res.json(contact);
  });
};

// Get Contacts
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Get Contact by ID
export const getContactByID = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Update Contact
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

// Delete Contact
export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'successfully deleted contact, no turning back' });
  });
};
