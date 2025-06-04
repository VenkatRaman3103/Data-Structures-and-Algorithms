/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        if (num != 0) {
            result.push(num);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        result.push(num);
    }

    return result.sort();
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const result = merge(nums1, m, nums2, n);
console.log(result);
