function canConstruct(ransomNote, magazine) {
    let arr1 = ransomNote.split('');
    let arr2 = magazine.split('');

    let hashTable = {};

    for (let i = 0; i < arr1.length; i++) {
        const char1 = arr1[i];

        if (hashTable[char1] == undefined) {
            hashTable[char1] = 1;
        } else {
            hashTable[char1] += 1;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        const key = arr2[j];

        if (hashTable[key] == undefined) {
            continue;
        } else {
            hashTable[key] -= 1;
        }
    }

    for (let k = 0; k < arr1.length; k++) {
        const key = arr1[k];
        if (hashTable[key] > 0) {
            return false;
        }
    }

    return true;
}

const ransomNote = 'fffbfg';
const magazine = 'effjfggbffjdgbjjhhdegh';
const result = canConstruct(ransomNote, magazine);
console.log(result);
