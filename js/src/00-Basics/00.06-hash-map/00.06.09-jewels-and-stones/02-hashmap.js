function numJewelsInStones(jewels, stones) {
    let stonesList = stones.split('');
    let jewelsList = jewels.split('');

    let hashMap = {};
    let count = 0;

    for (let i = 0; i < stonesList.length; i++) {
        let key = stonesList[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = 1;
        } else {
            hashMap[key] += 1;
        }
    }

    for (let j = 0; j < jewelsList.length; j++) {
        let key = jewelsList[j];

        if (hashMap[key]) {
            count = count + hashMap[key];
        }
    }

    return count;
}

const jewels = 'aA';
const stones = 'aAAbbbb';

const result = numJewelsInStones(jewels, stones);
console.log(result);
