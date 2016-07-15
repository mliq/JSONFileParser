var fs = require('fs');

module.exports = function JSONProcessor(dataToParse, fileName) {
    //
    // PARSE DATA TO JSON
    //
    // For purpose of creating a key of good and bad items that is human editable.
    //
    let JSONOutput;

    //
    // Write the JSON
    //

    fs.writeFile(`./data/${fileName}.json`, JSON.stringify(dataToParse), (err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log(`${dataToParse.length} Items written to ${fileName}.json`);
    });
}
