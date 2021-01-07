require('./db/config');
const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  passport = require('./middleware/authentication'),
  userRouter = require('./routes/secure/users'),
  userRouterTwo = require('./routes/secure/reviews'),
  openRoutes = require('./routes/open/communities'),
  openRoutesTwo = require('./routes/open/listings'),
  openRoutesThree = require('./routes/open/users'),
  APIsRoutes = require('./routes/open/APIs');
axios = require('axios');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

// Unauthenticated routes
app.use('/api/communities', openRoutes);

app.use(openRoutesTwo);
app.use(openRoutesThree);
app.use(APIsRoutes);


app.use('/api/listings', openRoutesTwo);
app.use('/api/users', openRoutesThree);


// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
app.use('/api/*', passport.authenticate('jwt', { session: false }));

//Authenticated Routes
app.use('/api/users', userRouter);
app.use('/api/reviews', userRouterTwo);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
