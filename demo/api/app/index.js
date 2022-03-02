// Pull in the express package
const express = require('express');
// Add Loggers... To enable/disable, update DEBUG env variable (nodemon.json)
const log = require('debug')('API:App Logging'); // For general logs
const logErrors = require('debug')('API: Error Logging'); // For error logs
const path = require('path'); // We'll use this to be sure of our paths
// Log all requests made to server...
const morganDebug = require('morgan-debug');
const cors = require('cors');
// Pull in EXAMPLE routers
const decisionRouter = require('./routes/decisions'); // †Example Router
const optionRouter = require('./routes/options'); // †Example Router

// Create an Express app
const app = express();

// Checks to see if the content-type is json and parses it into req.body
app.use(express.json());
// Log all requests
app.use(morganDebug('API:request', 'dev'));
app.use(cors()); // Basic setup of cors for cross origin resource sharing

// USE ROUTERS **********************
// Routers are useful for organizing/grouping end points
app.use('/decisions', decisionRouter); // † example router
app.use('/options', optionRouter); // † example router

// ROUTING **************************
// This example shows handling incoming traffic immediately
// which is slightly different than pointing to a router (shown above)
app.use('/about', (req, res, next) => {
  log('RUNS WHEN incoming req for "about" page endpoint');
  res.status('200').send('Ok!');
  next(new Error('Not Authorized!'));
});

// STATIC FILES **********************
// Initially the demo just set up a static HTML page
// Eventually it incorporates REACT's build folder (see below)
// Express' path to public should be relative to the directory where the node process was run
// app.use(express.static('public'));
// To be more clear on the path, just use path to be specific...
// app.use('/', express.static(path.join(__dirname, 'public')));

// REACT STATIC FILES  *************************************
// When ready to incorporate React...
// Include React's Default Build Directory!
// Let express know where to find the react build folder for static assets
app.use(express.static(path.join(__dirname, '../../reactjs/build')));

// REACT Default Route *************************************
// If an incoming end point isn't handled the default below will run.
// Important! This catch-all endpoint must be placed AFTER other routes.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../reactjs/build', 'index.html'));
});

// DEFAULT ERROR HANDLER ****************************
// Original Version
// Four params indicate an error handler...
// Using eslint to disable error...
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  logErrors('ERROR FOUND: ', err);
  log('Example of using another logger for general messages');
  res.sendStatus(500);
});

// ALTERNATE ERROR HANDLER ****************************
// Being more specific about the error...
// app.use((err, req, res, next) => {
//   logErrors('ERROR FOUND:', err);
//   // res.sendStatus(500);
//   res.status(err.code || 500).json({
//     mesage: err.message,
//     err,
//   });
// });

// Export the Express app
module.exports = app;
