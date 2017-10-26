var http = require('http');
var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // archive.readListOfUrls();
  // console.log(archive.readListOfUrls(function(data) {return data;}));

  if(req.method === 'GET' && req.url === '/') {
    fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data) {
      res.writeHead(200, httpHelpers.headers);

      res.end(data);
    })

  }
//   else if (req.method === 'POST' && req.url === '/') {
//     /*
//
//       if url is in the list
//         then return the html file reffering to the file in the archive/sites/etc...
//       else
//         write the loading page html to the page
//         invoke htmlFetch.js to use workers to find and download the site we want
//
//     */
//
//     res.writeHead(201, httpHelpers.headers);
//     res.end();
//
//     // fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data) {
//     //   res.writeHead(200, httpHelpers.headers);
//     //   res.end(data);
//     }
//
//     // req.on('data', function(data) {
//     //   body += data;
//     //
//     // })
//     // req.on('end', function() {
//
//
};
