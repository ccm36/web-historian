var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt'),          //archives folder
  tempList: path.join(__dirname, '../web/archives/sites.txt')   //web folder  - temp

};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile('../archives/sites.txt', 'utf8', (err, data) => {
      if (err) {
        throw error;
      } else {
        var convertData = toArray(data);  //convert sites.txt into array
        return callback(convertData);     //pass array into callback function
      }
    });
};


exports.isUrlInList = function(url, callback) {
  var checkList = archive.readListOfUrls(callback);   //get site list
  return checkList.indexOf('url') !== -1;             //return true if url is in the site list
};

exports.addUrlToList = function(url, callback) {
  fs.appendFile(paths.list, 'url', (err) => {
      if (err) throw err;
      console.log('The url was appended to the sites.txt file');
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
