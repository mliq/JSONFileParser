var _ = require('lodash');
// var request = require('request');
var rp = require('request-promise');

const API_KEY = 'fad7f5c2-703c-49f0-bffa-998486e35221';

module.exports = function useItem(UUID) {
    return rp({
        url: `http://thegame.nerderylabs.com:1337/items/use/${UUID}`, //URL to hit
        // qs: {from: 'blog example', time: +new Date()}, //Query string data
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'apikey': API_KEY
        }
    });
    // }, function(error, response, body){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log(response.statusCode, body, response);
    //         // return true if item success
    //         if (response.statusCode === 400) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    // });
}
