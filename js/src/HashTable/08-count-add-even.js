function countAddEven(nums) {
    const hashTable = {
        even: 0,
        odd: 0,
    };

    for (let n of nums) {
        let isEven = n % 2 == 0;

        if (isEven == true) {
            hashTable['even']++;
        } else {
            hashTable['odd']++;
        }
    }

    return hashTable;
}

const nums = [1, 2, 3, 4, 5];
const result = countAddEven(nums);
console.log(result);
