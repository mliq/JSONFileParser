# JSONFileParser

Node JSON file parser and utilities to play The Game.


Point gathering and items gathered into log files using bash script at `src/bash/the_game.sh`. Manual **use item** script also located at `src/bash/use_item.sh`.

Node app runs from `src/index.js` - uses "good items" as defined in `src/js/getGoodItems.js` at 15 sec interval, writes all item inventory to csv file at `src/data/combinedItems.csv`

`src/index_stream.js` was in progress attempt to develop an app that used streaming input but was out of scope and abandoned.

Some rudimentary charts created in R using the csv output as an input: R script located at `src/R/the_game.R`

Initially comma separation was left out of bash so added manually using sed: `sed 's/$/,/' day1.log > day1.array`
