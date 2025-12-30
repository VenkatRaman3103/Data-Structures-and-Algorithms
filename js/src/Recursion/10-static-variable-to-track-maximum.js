function trackMaximum(nums) {
    let max = 0;

    function fn(nums, ind) {
        if (ind == nums.length) {
            return;
        }

        max = Math.max(nums[ind], max);

        fn(nums, ind + 1);
    }
    fn(nums, 0);

    console.log(max);
    return max;
}

trackMaximum([1, 12, 3, 4, 5]);
