var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt'),          //archives folder
  // tempList: path.join(__dirname, '../web/archives/sites.txt')   //web folder  - temp

};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

exports.readListOfUrls = function(callback) {
  fs.readFile(exports.paths.list, 'utf8', function(err, data){
      if (err) {
        throw err;
      } else {
        var convertData = data.split('\n');
        return callback(convertData);
      }
    });
};

exports.isUrlInList = function(url, callback) {
  var checkList = exports.readListOfUrls(function(urls) {
    return callback(urls.includes(url));
  });
};

exports.addUrlToList = function(url, callback) {
  fs.appendFile(exports.paths.list, url, function(err) {
    if (err) {
      throw err;
    } else {
      callback();
    }
  });
};

exports.isUrlArchived = function(url, callback) {
  fs.readdir(exports.paths.archivedSites, 'utf8', function(err, files) {
    if (err) {
      throw err;
    } else {
      return callback(files.includes(url));
    }
  });
};

exports.downloadUrls = function(urls) {
  urls.forEach(function(url) {
    request('http://' + url).pipe(fs.createWriteStream(exports.paths.archivedSites + '/' + url));
  });

};
