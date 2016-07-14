var fs = require('fs');
var ndjson = require('ndjson');

var arr = [];

var serialize = ndjson.serialize()
serialize.on('data', function(line) {
  // line is a line of stringified JSON with a newline delimiter at the end
})

// fs.createReadStream('game_dev.log')
//   .pipe(ndjson.parse())
//   .on('data', function(obj) {
//     arr.push(obj);
//   })
//
// console.log(arr);
//
// var _ = require('lodash');
//
// var logfile = fs.readFileSync(
//     'game_dev.log',
//     'utf8',
//     (err, data) => JSON.parse(data)
// );
//
// console.log(logfile);
