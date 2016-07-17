var fs = require('fs');
var json2csv = require('json2csv');

module.exports = function CSVProcessor(dataToParse, fileName) {
    //
    // PARSE DATA TO CSV
    //
    // For purpose of creating a key of good and bad items that is human editable.
    //
    let CSVOutput;

    //
    // CONFIG
    //
    const fields = ['Name', 'Id', 'Rarity', 'Description'];

    //
    // CONVERT JSON TO CSV
    //
    try {
        CSVOutput = json2csv({ data: dataToParse, fields });
        // console.log(CSVOutput);
    } catch (err) {
        // Errors are thrown for bad options, or if the data is empty and no fields are provided.
        // Be sure to provide fields if it is possible that your data array will be empty.
        console.error(err);
    }

    //
    // Write the CSV
    //
    fs.writeFile(`${fileName}.csv`, CSVOutput, (err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log(`${dataToParse.length} Items written to ${fileName}.csv`);
    });
}
