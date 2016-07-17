var _ = require('lodash');

const GOOD_ITEM_NAMES = [
    // 'Buffalo'
    // 'Pip-Boy',
    // 'Cardboard Box',
    // 'Bullet Bill',
    // 'Morph Ball',
    //
    // 'Pokeball',
    // 'Biggs'
    //
    // 'Carbuncle'
    'Master Sword'
    // 'Da Da Da Da Daaa Da DAA da da',
    // 'UUDDLRLRBA',
    // 'Power Pellet: Pinky',
    // 'Treasure Chest',
    // 'Power Pellet: Blinky',
    // 'Power Pellet: Inky',
    // 'Zelda Cartridge',
    // 'Ocarina of Time',
    // 'Morger Beard',
    // 'Varia Suit',
    // 'Holy Water',
    // 'Tanooki Suit',
    // 'Bo Jackson',
    // 'Gold Ring',
    // 'Ambrosia',
    // 'Star',
    // 'Pizza',
    // '7777'
    // 'Moogle',
];

module.exports = function getGoodItems(dataToParse) {
    return dataToParse.filter((item) => (GOOD_ITEM_NAMES.indexOf(item.Name) > -1))
}
