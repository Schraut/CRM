const routes = (app) => {
  app
    .route('/contact')
    .get(
      (req, res, next) => {
        // Middleware
        console.log(`Request from : ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next(); // next is from express and is used to move to the next piece of code
      },
      (req, res, next) => {
        res.send('GET request successful bro!');
      }
    )

    .post((req, res) => res.send('Post request successful man!'));

  app
    .route('/contact/:contactID')
    .put((req, res) => res.send('PUT request successful, sweet!'))

    .delete((req, res) => res.send('DELETE request works :)'));
};

export default routes;
