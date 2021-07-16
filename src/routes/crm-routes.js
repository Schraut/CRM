// Routes
const routes = (app) => {
  // Get
  app
    .route('/contact')
    .get(
      (req, res, next) => {
        // Middleware has access to the request object(req), response object(res), and the next() function. It gives you more control with get requests.
        console.log(`Request from : ${req.originalUrl}`); // /contact
        console.log(`Request type: ${req.method}`); // type: GET
        next(); // next() is used to move to the next piece of code
      },
      (req, res, next) => {
        res.send('GET request successful bro!');
      }
    )
    .post((req, res) => res.send('Post request successful man!'));

  // Put
  app
    .route('/contact/:contactID')
    .put((req, res) => res.send('PUT request successful, sweet!'))

    .delete((req, res) => res.send('DELETE request works :)'));
};

export default routes;

// Using Middleware
// http://expressjs.com/en/guide/using-middleware.html#using-middleware
