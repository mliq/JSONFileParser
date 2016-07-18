const fs = require('fs');

module.exports = function JSONProcessor(dataToParse, fileName) {
    fs.writeFile(`./data/${fileName}.json`, JSON.stringify(dataToParse), (err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log(`${dataToParse.length} Items written to ${fileName}.json`);
    });
};
