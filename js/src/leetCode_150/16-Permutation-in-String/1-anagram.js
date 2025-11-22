var checkInclusion = function (s1, s2) {
    let a = s1.split('');
    let b = s2.split('');

    let window_lenght = a.length;

    let hashTable = {};

    for (let char of a) {
        hashTable[char] = hashTable[char] + 1 || 1;
    }

    for (let i = 0; i <= b.length - window_lenght; i++) {
        let temp = { ...hashTable };

        for (let j = i; j < i + window_lenght; j++) {
            let char = b[j];

            if (temp[char] != undefined) {
                temp[char]--;
            }
        }

        let allZero = true;

        for (let key of Object.keys(temp)) {
            if (temp[key] != 0) {
                allZero = false;
                break;
            }
        }

        if (allZero) return true;
    }

    return false;
};

const s1 = 'ab';
const s2 = 'eidboaoo';

const result = checkInclusion(s1, s2);
console.log(result);
