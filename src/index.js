var fs = require('fs');
var _ = require('lodash');

const { day1 } = require('./data/cleaned/day1Array');
const { day2 } = require('./data/cleaned/day2Array');

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

fs.writeFile('test', JSON.stringify(day1Items));
