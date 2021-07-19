import {
  addNewContact,
  getContacts,
  getContactByID,
  updateContact,
  deleteContact,
} from '../controllers/crm-controller';
// Routes
const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // Middleware has access to the request object(req), response object(res), and the next() function. It gives you more control with get requests.
      console.log(`Request from : ${req.originalUrl}`); // prints /contact
      console.log(`Request type: ${req.method}`); // prints type: GET
      next(); // next() is used to move to the next piece of code
    }, getContacts)
    // Post endpoint
    .post(addNewContact);

  app
    .route('/contact/:contactID')
    // Get contact
    .get(getContactByID)
    // Update contact
    .put(updateContact)
    // Delete contact
    .delete(deleteContact);
};

export default routes;

// Using Middleware
// http://expressjs.com/en/guide/using-middleware.html#using-middleware
