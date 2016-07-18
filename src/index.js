// Import Functions
const CSVProcessor = require('./js/CSVProcessor');
const extractItems = require('./js/extractItems');
// const getUniqueItemNames = require('./js/getUniqueItemNames');
const getGoodItems = require('./js/getGoodItems');
const useItems = require('./js/useItems');

// Import Data
const { day1 } = require('./data/cleaned/day1Array');
const { day2 } = require('./data/cleaned/day2Array');
const { day3 } = require('./data/cleaned/day3Array');

// Extract Items from data responses
const day1Items = extractItems(day1);
const day2Items = extractItems(day2);
const day3Items = extractItems(day3);
// Combine items to one array
const combinedItems = [...day1Items, ...day2Items, ...day3Items];

// Get good items and use them.
const goodItems = getGoodItems(combinedItems);
useItems(goodItems);

// Find only unique item types to create CSV key for good/bad user-entry
// const uniqueItems = getUniqueItemNames(combinedItems);

// Write items to CSV
CSVProcessor(combinedItems, 'combinedItems3');
