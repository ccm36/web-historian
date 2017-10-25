var http = require('http');
var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // var headers = ****get headers from http-helpers

  if(req.method === 'GET' && req.url === '/') {
    fs.readFile('./public/index.html', function(err, data) {
      console.log('data: ', data); // need a buffer or string

      res.writeHead(200, httpHelpers.headers);
      res.write(data);
      res.end();


    })

    // req.on('data', function(data) {
    //   body += data;
    //
    // })

    // req.on('end', function() {
  }
};
