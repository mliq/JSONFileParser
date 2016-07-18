const rp = require('request-promise');

const API_KEY = 'fad7f5c2-703c-49f0-bffa-998486e35221';

module.exports = function useItem(UUID) {
    return rp({
        url: `http://thegame.nerderylabs.com:1337/items/use/${UUID}`,
        method: 'POST',
        headers: {
            accept: 'application/json',
            apikey: API_KEY
        }
    });
}
