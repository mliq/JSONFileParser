var _ = require('lodash');
var request = require('request');
var useItem = require('./useItem');

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

const recursiveUseItem = (dataToParse, i, total) => useItem(dataToParse[i].Id)
    .then(function(success) {
        console.log('SUCCESS', i, ' of ', total);
        console.log(success);
        console.log('WAITING 15 sec');
        wait(15000);
        const newI = i + 1;
        if (newI < total) {
            recursiveUseItem(dataToParse, newI, total);
        }
    })
    .catch(function(error) {
        console.log('ERROR', i, ' of ', total);
        console.log(error.response);
        console.log('CONTINUING');
        const newI = i + 1;
        if (newI < total) {
            recursiveUseItem(dataToParse, newI, total);
        }
    });

module.exports = function useItems(dataToParse) {
    recursiveUseItem(dataToParse, 0, dataToParse.length);
}
