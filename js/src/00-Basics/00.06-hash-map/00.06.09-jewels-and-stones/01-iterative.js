function numJewelsInStones(jewels, stones) {
    const arr1 = jewels.split('');
    const arr2 = stones.split('');

    let count = 0;

    for (let char1 of arr1) {
        for (let char2 of arr2) {
            if (char1 == char2) {
                count += 1;
            }
        }
    }

    return count;
}

const jewels = 'aA';
const stones = 'aAAbbbb';

const result = numJewelsInStones(jewels, stones);
console.log(result);
