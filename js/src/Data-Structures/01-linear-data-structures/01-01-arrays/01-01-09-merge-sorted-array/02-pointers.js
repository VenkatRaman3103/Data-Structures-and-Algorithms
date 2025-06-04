/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let a = m - 1;
    let b = n - 1;
    let r = m + n - 1;

    while (b >= 0) {
        if (nums1[a] > nums2[b]) {
            nums1[r] = nums1[a];
            a--;
        } else {
            nums1[r] = nums2[b];
            b--;
        }
        r--;
    }
    return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const result = merge(nums1, m, nums2, n);
console.log(result);
