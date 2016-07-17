// Import Functions
var CSVProcessor = require('./js/CSVProcessor');
var extractItems = require('./js/extractItems');
var getUniqueItemNames = require('./js/getUniqueItemNames');
var getGoodItems = require('./js/getGoodItems');
var useItem = require('./js/useItem');
var useItems = require('./js/useItems');

// Import Data
const { day1 } = require('./data/cleaned/day1Array');
const { day2 } = require('./data/cleaned/day2Array');
const { day3 } = require('./data/cleaned/day3Array');
const { day3_2 } = require('./data/cleaned/day3_2Array');
const { day3_3 } = require('./data/cleaned/day3_3Array');

// Extract Items from data responses
const day1Items = extractItems(day1);
const day2Items = extractItems(day2);
const day3Items = extractItems(day3);
const day3_2Items = extractItems(day3_2);
const day3_3Items = extractItems(day3_3);
// Combine items to one array
const combinedItems = [...day1Items, ...day2Items, ...day3_2Items, ...day3_3Items];

// Get good items and use them.
const goodItems = getGoodItems(combinedItems);
useItems(goodItems);

// Find only unique item types to create CSV key for good/bad user-entry
// const uniqueItems = getUniqueItemNames(combinedItems);

// Write items to CSV
CSVProcessor(combinedItems, 'combinedItems3');
