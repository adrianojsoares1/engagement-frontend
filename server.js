const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const proxy = require('express-http-proxy');
const url = require('url');
const path = require('path');

const app = express();
const server = http.createServer(app);


/************************
 * CONFIGURE APPLICATION *
 ************************/

// Configure environment to disable NODE_TLS_REJECT_UNAUTHORIZED
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Configure express to use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*******************************************************************
 * ACQUIRE ENVIRONMENT VARIABLES FOR HOST:PORT TO PROXY REQUESTS TO *
 *******************************************************************/

//URL for the survey API
const SURVEY_URL = 'engagement-ui-backend:8080';

/**************************************************
 * REGISTER PORT 8080 FOR APPLICATION TO LISTEN ON *
 **************************************************/

server.listen(8080, function () {
  console.log('App listening on port 8080!');
});


/****************************************************************
 * REGISTER DIRECTORY CONTENT TO BE VIEWED BY APP AS / DIRECTORY *
 ****************************************************************/
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/img'));

/****************************
 * Define APIs to forward to *
 ****************************/

// Tell the app to proxy all requests that go through /api/transport to the apropriate service
app.use('/api/*', setProxy(SURVEY_URL, '/api/'));

/**
 * Provides a proxied route to send requests of some nature to some destination
 * @param {string} baseUrl The location of the API being proxied to
 * @param {string} apiUrl  The route that consumers will be hitting on this service
 */
function setProxy(baseUrl, apiUrl) {
  return proxy(baseUrl, {
    proxyReqPathResolver: function(req, res) {
      let newUrl = req.originalUrl.replace(apiUrl, '/');
      return url.parse(newUrl).path;
    }
  });
}

/**
 * Readiness health-check endpoint
 **/
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));
