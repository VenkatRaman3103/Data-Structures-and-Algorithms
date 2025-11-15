var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let a = numbers[l];
        let b = numbers[r];

        let val = a + b;

        if (val == target) {
            return [l + 1, r + 1];
        }

        if (val > target) {
            r--;
        } else {
            l++;
        }
    }
};

const numbers = [2, 7, 11, 15];
const target = 9;

const result = twoSum(numbers);
console.log(result);
