'use strict';

const fs = require('fs');

module.exports = function (filePaths, callback) {
  let samuelElJackson = [];
  //read first item in the array
  fs.readFile(filePaths[0], (err, data) => {
    if (err) return callback(err);

    samuelElJackson.push(data.toString());

    //read second item in the array
    fs.readFile(filePaths[1], (err, data) => {
      if (err) return callback(err);

      samuelElJackson.push(data.toString());
    
    //read third item in the array
      fs.readFile(filePaths[2], (err, data) => {
        if (err) return callback(err);
        samuelElJackson.push(data.toString());
        callback(null, samuelElJackson);
      });
    });

  });
};
