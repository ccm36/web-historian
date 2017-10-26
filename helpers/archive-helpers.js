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
  // tempList: path.join(__dirname, '../web/archives/sites.txt')   //web folder  - temp

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
  // fs.existsSync(paths.list, url, (err) => {         // need to check: fs.exists us deprecated
  //     if (err) throw err;
  //     console.log('The url was appended to the sites.txt file');
  //   }
};

exports.downloadUrls = function(urls) {
    //  receive array of array of url addresses => save as an argument
    //  each element uses GET request to read html of the address and address in the ./archives/sites as the filename   =>  where html document contents generated
    //  if url sends statusCode 302 (redirect) to client side, try http.get again for value referring to response.headers.location

};

// exports.addUrlToTempList = function(url, callback) {    //think we will need this helper function too
//     //  probably same as addUrlToList, just with different path
// };
