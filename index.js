'use strict';

const samuel = require('./lib/read-files.js');

const main = module.exports = function(argv) {
  if(!argv || !argv.length === 5) return 'Usage Error: must provide "great and furious anger"';

  return samuel(argv.slice(2,5), function(err, data){
    if (err) return console.error(err);
    console.log(data);
  });
};

main(process.argv);
