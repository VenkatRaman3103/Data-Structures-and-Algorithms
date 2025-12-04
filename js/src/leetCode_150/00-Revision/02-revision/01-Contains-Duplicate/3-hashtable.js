export var containsDuplicate = function (nums) {
    let hastable = {};

    for (let num of nums) {
        hastable[num] = (hastable[num] || 0) + 1;
    }

    for (let key of Object.keys(hastable)) {
        if (hastable[key] >= 2) {
            return true;
        }
    }

    return false;
};

const nums = [0, 2, 3, 1];

const result = containsDuplicate(nums);
console.log(result);
