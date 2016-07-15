var _ = require('lodash');

module.exports = function extractItems(dataToParse) {
    const extractItemResponses = (responseArray) => responseArray.filter(
        (responseObject) => {
            if (_.get(responseObject, 'Item', null)) {
                return true;
            }
        }
    );

    const extractItems = (itemResponses) => itemResponses.map(
        (itemResponseObject) => itemResponseObject.Item.Fields[0]
    );

    return extractItems(extractItemResponses(dataToParse));
}
