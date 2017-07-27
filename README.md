# JSONFileParser

Node JSON file parser and utilities to play ~~The Game~~ NerdQuest.

## Quickstart - [Strategy 1](#strategy-1):

1. open `src/bash/the_game.sh`
2. replace `YOUR KEY HERE` with your API key.
3. run `npm run start`
4. monitor the log file (by default `<root>/year2_day1.log`)

## Game Strategies

### <a name="strategy-1"></a>Strategy 1 - Harvest points and items

This is the main initial task of the game, run with `npm run start`. It hits the endpoint every 1 second and collects the output in a log file. Later, we can go through this log file to find items and use them.

### <a name="strategy-2"></a>Strategy 2 - Quest

This is new in NerdQuest and I don't quite yet know what it does. But you can run `npm run quest` to hit the quest endpoint one time and output is saved to `<root>/quest.log`.

### <a name="strategy-3"></a>Strategy 3 - Use Items

To be documented and updated soon, see below for some explanation of last year's functionality (which has not been updated yet).

----

### 1.0 (The Game) release notes

Point gathering and items gathered into log files using bash script at `src/bash/the_game.sh`. Manual **use item** script also located at `src/bash/use_item.sh`.

Node app runs from `src/index.js` - uses "good items" as defined in `src/js/getGoodItems.js` at 15 sec interval, writes all item inventory to csv file at `src/data/combinedItems.csv`

`src/index_stream.js` was in progress attempt to develop an app that used streaming input but was out of scope and abandoned.

Some rudimentary charts created in R using the csv output as an input: R script located at `src/R/the_game.R`

Initially comma separation was left out of bash so added manually using sed: `sed 's/$/,/' day1.log > day1.array`
