function hasEvenDigits(num) {
    let counter = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        counter = counter + 1;
    }

    return counter % 2 == 0;
}

function findNumbers(nums) {
    let hashMap = {};
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (hashMap[key] == undefined) {
            hashMap[key] = hasEvenDigits(key);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (hashMap[num]) {
            counter += 1;
        }
    }

    return counter;
}
const nums = [12, 345, 2, 6, 7896];
const result = findNumbers(nums);
console.log(result);
