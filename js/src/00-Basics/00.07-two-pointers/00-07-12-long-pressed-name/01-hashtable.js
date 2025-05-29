/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    const hashTable = {};

    for (let i = 0; i < name.length; i++) {
        let key = name[i];

        hashTable[key] = 1 + (hashTable[key] || 0);
    }

    for (let i = 0; i < typed.length; i++) {
        let key = typed[i];

        if (hashTable[key]) {
            hashTable[key] -= 1;
        }
    }

    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] > 0) {
            return false;
        }
    }

    return true;
};
const name = 'rick';
const typed = 'kric';
const result = isLongPressedName(name, typed);
console.log(result);
