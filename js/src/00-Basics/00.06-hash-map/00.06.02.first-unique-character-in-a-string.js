// NOTE: iterative approach
function firstUnique_iterative(str) {
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
        const key = chars[i];

        let isSame = false;

        for (let j = i; j < chars.length; j++) {
            if (key == chars[j + 1]) {
                isSame = true;
            }
        }

        if (!isSame) {
            return key;
        }
    }
}

// console.clear();
// console.log(firstUnique_iterative('loveleetcode'));

// NOTE: using hash map
function firstUnique_hashmap(str) {
    let chars = str.split('');

    let hashTable = {};

    for (let i = 0; i < str.length; i++) {
        let key = chars[i];
        if (hashTable[key] == undefined) {
            hashTable[key] = 1;
        } else {
            hashTable[key] += 1;
        }
    }

    for (let m = 0; m < chars.length; m++) {
        let key = chars[m];
        if (hashTable[key] == 1) {
            return key;
        }
    }

    console.log(hashTable);
}

console.clear();
console.log(firstUnique_hashmap('leetcode'));
