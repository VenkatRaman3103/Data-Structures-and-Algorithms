function countWords(words1, words2) {
    let words1_hashmap = {};
    let words2_hashmap = {};
    let result = [];

    for (let i = 0; i < words1.length; i++) {
        let key = words1[i];

        if (words1_hashmap[key] == undefined) {
            words1_hashmap[key] = 1;
        } else {
            words1_hashmap[key] += 1;
        }
    }

    for (let i = 0; i < words2.length; i++) {
        let key = words2[i];

        if (words2_hashmap[key] == undefined) {
            words2_hashmap[key] = 1;
        } else {
            words2_hashmap[key] += 1;
        }
    }

    let base = words1;

    for (let i = 0; i < base.length; i++) {
        let key = base[i];
        if (words1_hashmap[key] == 1 && words2_hashmap[key] == 1) {
            result.push(key);
        }
    }

    console.log(words1_hashmap, words2_hashmap, result);
    return result.length;
}

const words1 = ['leetcode', 'is', 'amazing', 'as', 'is'];
const words2 = ['amazing', 'leetcode', 'is'];
const result = countWords(words1, words2);
console.log(result);
