var _ = require('lodash');

module.exports = function getUniqueItemNames(dataToParse) {
    const result = [];

    dataToParse.forEach((item) => result.push(item.Name));

    return _.uniq(result);
}
