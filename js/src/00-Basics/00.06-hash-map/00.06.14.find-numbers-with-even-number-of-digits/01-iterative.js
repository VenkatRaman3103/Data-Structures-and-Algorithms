function hasEvenDigits(num) {
    let counter = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        counter += 1;
    }

    return counter % 2 == 0;
}

function findNumbers(nums) {
    let counter = 0;

    for (let num of nums) {
        if (hasEvenDigits(num)) {
            counter += 1;
        }
        console.log(hasEvenDigits(num));
    }
    return counter;
}

const nums = [12, 345, 2, 6, 7896];
const result = findNumbers(nums);
console.log(result);
