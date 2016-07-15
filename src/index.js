// Import Functions
var CSVProcessor = require('./js/CSVProcessor');
var extractItems = require('./js/extractItems');

// Import Data
const { day1 } = require('./data/cleaned/day1Array');
const { day2 } = require('./data/cleaned/day2Array');

// Extract Items from data responses
const day1Items = extractItems(day1);
const day2Items = extractItems(day2);
// Combine items to one array
const combinedItems = [...day1Items, ...day2Items];

// Find only unique item types to create CSV key for good/bad user-entry

// Write items to CSV
CSVProcessor(combinedItems, 'combinedItems');
