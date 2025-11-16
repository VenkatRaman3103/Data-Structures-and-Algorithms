var numSub = function (s) {
    let count = 0n;

    let blocks = s.split('0').filter((item) => item != '');

    function subStringCount(k) {
        return (k * (k + 1n)) / 2n;
    }

    for (let block of blocks) {
        let k = BigInt(block.length);
        count += subStringCount(k);
    }

    return Number(count);
};

const s = '111111';
const result = numSub(s);
console.log(result);
