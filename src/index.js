var fs = require('fs');
var _ = require('lodash');
var json2csv = require('json2csv');

// Import cleaned up JSON response Object arrays
const { day1 } = require('./data/cleaned/day1Array');
const { day2 } = require('./data/cleaned/day2Array');

// Helpers to massage data
const extractItemResponses = (responseArray) => responseArray.filter(
    (responseObject) => {
        if (_.get(responseObject, 'Item', null)) {
            return true;
        }
    }
);

const extractItems = (itemResponses) => itemResponses.map(
    (itemResponseObject) => itemResponseObject.Item
);

const day1Items = extractItems(extractItemResponses(day1));
const day2Items = extractItems(extractItemResponses(day2));

const combinedItems = [...day1Items, ...day2Items];

fs.writeFile('./data/combinedItems.json', JSON.stringify(combinedItems), (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(`${combinedItems.length} Items written to combinedItems.json`);
});
