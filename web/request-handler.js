var http = require('http');
var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if (req.method === 'GET') {

    if(req.url === '/') {

      fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data) {
        res.writeHead(200, httpHelpers.headers);
        res.end(data);
      })

    } else {

      archive.isUrlArchived(req.url, function(isTrue) {

        if(isTrue) {
          fs.readFile(archive.paths.archivedSites + '/' + req.url, 'utf8', function(err, data) {
            if(err) {throw err;}
            res.writeHead(200, httpHelpers.headers);
            res.end(data);
          });

        } else {
          fs.readFile(archive.paths.siteAssets + '/loading.html', 'utf8', function(err, data) {
            res.writeHead(404, httpHelpers.headers);
            res.end(data);
          });
        }
      });
    }
  } else if (req.method === 'POST') {

      

  } else {
    // res.writeHead(404, httpHelpers.headers);
    // res.end();
  }
};
