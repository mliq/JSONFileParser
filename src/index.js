var fs = require('fs');

var logfile = fs.readFileSync(
    'game_dev.log',
    'utf8',
    (err, data) => JSON.parse(data)
);

console.log(logfile);
