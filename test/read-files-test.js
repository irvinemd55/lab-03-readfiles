'use-strict';

const fs = require('fs');
const expect = require('chai').expect;
const index = require('../lib/read-files.js');

let filePaths = [
  `${__dirname}/../assets/samuel.txt`,
  `${__dirname}/../assets/el.txt`,
  `${__dirname}/../assets/jackson.txt`,
];

describe('testing callbacks', function(){
  describe('with valid inputs', function(){
    var testData = [];

    before(function(done){
      fs.readFile(filePaths[0], (err, data) => {
        if (err) return done(err);
        testData.push(data.toString());
        fs.readFile(filePaths[1], (err, data) => {
          if (err) return done(err);
          testData.push(data.toString());
          fs.readFile(filePaths[2], (err, data) => {
            if (err) return done(err);
            testData.push(data.toString());
            done();
          });
        });
      });
    });

    it('should expect "three files"', (done) =>{
      index(filePaths, function(err, data){
        if (err) return done(err);
        expect(testData[0]).to.equal(data[0]);
        expect(testData[1]).to.equal(data[1]);
        expect(testData[2]).to.equal(data[2]);
        done();
      });
    });

    describe('with invalid inputs', function(){
      it('should expect "Usage Error: must provide three files"', function(done){
        // with bad file paths readFIles should fail
        let badFiles = [ './assets/wrong.txt', './assets/wrongwong2.txt', './assets/wrongwongwrong.txt'];

        index(badFiles, function(err, data) {
          expect(!!err).to.equal(true);
          done();
        });
      });
    });
  });
});
