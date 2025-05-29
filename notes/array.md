# Array Practice Problems

## 🟢 Easy (1-20)

### 1. Two Sum

**Problem**: Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
**Sample Input 1**: `nums = [2,7,11,15], target = 9`  
**Expected Output 1**: `[0,1]`
**Sample Input 2**: `nums = [3,2,4], target = 6`  
**Expected Output 2**: `[1,2]`
**Links**: LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/)

### 2. Best Time to Buy and Sell Stock

**Problem**: You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day. Find the maximum profit you can achieve.
**Sample Input 1**: `prices = [7,1,5,3,6,4]`  
**Expected Output 1**: `5`
**Sample Input 2**: `prices = [7,6,4,3,1]`  
**Expected Output 2**: `0`
**Links**: LeetCode: [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### 3. Contains Duplicate

**Problem**: Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.
**Sample Input 1**: `nums = [1,2,3,1]`  
**Expected Output 1**: `true`
**Sample Input 2**: `nums = [1,2,3,4]`  
**Expected Output 2**: `false`
**Links**: LeetCode: [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

### 4. Maximum Subarray

**Problem**: Given an integer array `nums`, find the contiguous subarray which has the largest sum and return its sum.
**Sample Input 1**: `nums = [-2,1,-3,4,-1,2,1,-5,4]`  
**Expected Output 1**: `6`
**Sample Input 2**: `nums = [1]`  
**Expected Output 2**: `1`
**Links**: LeetCode: [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### 5. Product of Array Except Self

**Problem**: Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.
**Sample Input 1**: `nums = [1,2,3,4]`  
**Expected Output 1**: `[24,12,8,6]`
**Sample Input 2**: `nums = [-1,1,0,-3,3]`  
**Expected Output 2**: `[0,0,9,0,0]`
**Links**: LeetCode: [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

### 6. Find Minimum in Rotated Sorted Array

**Problem**: Suppose an array of length `n` sorted in ascending order is rotated. Given the sorted rotated array `nums`, return the minimum element.
**Sample Input 1**: `nums = [3,4,5,1,2]`  
**Expected Output 1**: `1`
**Sample Input 2**: `nums = [4,5,6,7,0,1,2]`  
**Expected Output 2**: `0`
**Links**: LeetCode: [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

### 7. Single Number

**Problem**: Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.
**Sample Input 1**: `nums = [2,2,1]`  
**Expected Output 1**: `1`
**Sample Input 2**: `nums = [4,1,2,1,2]`  
**Expected Output 2**: `4`
**Links**: LeetCode: [136. Single Number](https://leetcode.com/problems/single-number/)

### 8. Move Zeroes

**Problem**: Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.
**Sample Input 1**: `nums = [0,1,0,3,12]`  
**Expected Output 1**: `[1,3,12,0,0]`
**Sample Input 2**: `nums = [0]`  
**Expected Output 2**: `[0]`
**Links**: LeetCode: [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

### 9. Remove Duplicates from Sorted Array

**Problem**: Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
**Sample Input 1**: `nums = [1,1,2]`  
**Expected Output 1**: `2, nums = [1,2,_]`
**Sample Input 2**: `nums = [0,0,1,1,1,2,2,3,3,4]`  
**Expected Output 2**: `5, nums = [0,1,2,3,4,_,_,_,_,_]`
**Links**: LeetCode: [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

### 10. Merge Sorted Array

**Problem**: You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order. Merge `nums2` into `nums1` as one sorted array.
**Sample Input 1**: `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`  
**Expected Output 1**: `[1,2,2,3,5,6]`
**Sample Input 2**: `nums1 = [1], m = 1, nums2 = [], n = 0`  
**Expected Output 2**: `[1]`
**Links**: LeetCode: [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

### 11. Plus One

**Problem**: You are given a large integer represented as an integer array `digits`. Increment the large integer by one and return the resulting array.
**Sample Input 1**: `digits = [1,2,3]`  
**Expected Output 1**: `[1,2,4]`
**Sample Input 2**: `digits = [9]`  
**Expected Output 2**: `[1,0]`
**Links**: LeetCode: [66. Plus One](https://leetcode.com/problems/plus-one/)

### 12. Pascal's Triangle

**Problem**: Given an integer `numRows`, return the first `numRows` of Pascal's triangle.
**Sample Input 1**: `numRows = 5`  
**Expected Output 1**: `[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]`
**Sample Input 2**: `numRows = 1`  
**Expected Output 2**: `[[1]]`
**Links**: LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)

### 13. Remove Element

**Problem**: Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place.
**Sample Input 1**: `nums = [3,2,2,3], val = 3`  
**Expected Output 1**: `2, nums = [2,2,_,_]`
**Sample Input 2**: `nums = [0,1,2,2,3,0,4,2], val = 2`  
**Expected Output 2**: `5, nums = [0,1,4,0,3,_,_,_]`
**Links**: LeetCode: [27. Remove Element](https://leetcode.com/problems/remove-element/)

### 14. Search Insert Position

**Problem**: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be inserted.
**Sample Input 1**: `nums = [1,3,5,6], target = 5`  
**Expected Output 1**: `2`
**Sample Input 2**: `nums = [1,3,5,6], target = 2`  
**Expected Output 2**: `1`
**Links**: LeetCode: [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

### 15. Missing Number

**Problem**: Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.
**Sample Input 1**: `nums = [3,0,1]`  
**Expected Output 1**: `2`
**Sample Input 2**: `nums = [0,1]`  
**Expected Output 2**: `2`
**Links**: LeetCode: [268. Missing Number](https://leetcode.com/problems/missing-number/)

### 16. Majority Element

**Problem**: Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times.
**Sample Input 1**: `nums = [3,2,3]`  
**Expected Output 1**: `3`
**Sample Input 2**: `nums = [2,2,1,1,1,2,2]`  
**Expected Output 2**: `2`
**Links**: LeetCode: [169. Majority Element](https://leetcode.com/problems/majority-element/)

### 17. Valid Mountain Array

**Problem**: Given an array of integers `arr`, return `true` if and only if it is a valid mountain array.
**Sample Input 1**: `arr = [2,1]`  
**Expected Output 1**: `false`
**Sample Input 2**: `arr = [3,5,5]`  
**Expected Output 2**: `false`
**Links**: LeetCode: [941. Valid Mountain Array](https://leetcode.com/problems/valid-mountain-array/)

### 18. Find All Numbers Disappeared in an Array

**Problem**: Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.
**Sample Input 1**: `nums = [4,3,2,7,8,2,3,1]`  
**Expected Output 1**: `[5,6]`
**Sample Input 2**: `nums = [1,1]`  
**Expected Output 2**: `[2]`
**Links**: LeetCode: [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

### 19. Third Maximum Number

**Problem**: Given an integer array `nums`, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
**Sample Input 1**: `nums = [3,2,1]`  
**Expected Output 1**: `1`
**Sample Input 2**: `nums = [1,2]`  
**Expected Output 2**: `2`
**Links**: LeetCode: [414. Third Maximum Number](https://leetcode.com/problems/third-maximum-number/)

### 20. Height Checker

**Problem**: A school is trying to take an annual photo of all the students. Return the minimum number of students that must move to make all students stand in non-decreasing order of height.
**Sample Input 1**: `heights = [1,1,4,2,1,3]`  
**Expected Output 1**: `3`
**Sample Input 2**: `heights = [5,1,2,3,4]`  
**Expected Output 2**: `5`
**Links**: LeetCode: [1051. Height Checker](https://leetcode.com/problems/height-checker/)

## 🟡 Medium (21-35)

### 21. 3Sum

**Problem**: Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
**Sample Input 1**: `nums = [-1,0,1,2,-1,-4]`  
**Expected Output 1**: `[[-1,-1,2],[-1,0,1]]`
**Sample Input 2**: `nums = [0,1,1]`  
**Expected Output 2**: `[]`
**Links**: LeetCode: [15. 3Sum](https://leetcode.com/problems/3sum/)

### 22. Container With Most Water

**Problem**: You are given an integer array `height` of length `n`. Find two lines that together with the x-axis form a container that contains the most water.
**Sample Input 1**: `height = [1,8,6,2,5,4,8,3,7]`  
**Expected Output 1**: `49`
**Sample Input 2**: `height = [1,1]`  
**Expected Output 2**: `1`
**Links**: LeetCode: [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

### 23. Search in Rotated Sorted Array

**Problem**: There is an integer array `nums` sorted in ascending order (with distinct values). Given the array `nums` after rotation and an integer `target`, return the index of `target`.
**Sample Input 1**: `nums = [4,5,6,7,0,1,2], target = 0`  
**Expected Output 1**: `4`
**Sample Input 2**: `nums = [4,5,6,7,0,1,2], target = 3`  
**Expected Output 2**: `-1`
**Links**: LeetCode: [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

### 24. Next Permutation

**Problem**: Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
**Sample Input 1**: `nums = [1,2,3]`  
**Expected Output 1**: `[1,3,2]`
**Sample Input 2**: `nums = [3,2,1]`  
**Expected Output 2**: `[1,2,3]`
**Links**: LeetCode: [31. Next Permutation](https://leetcode.com/problems/next-permutation/)

### 25. Find First and Last Position of Element in Sorted Array

**Problem**: Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.
**Sample Input 1**: `nums = [5,7,7,8,8,10], target = 8`  
**Expected Output 1**: `[3,4]`
**Sample Input 2**: `nums = [5,7,7,8,8,10], target = 6`  
**Expected Output 2**: `[-1,-1]`
**Links**: LeetCode: [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

### 26. Jump Game

**Problem**: You are given an integer array `nums`. You are initially positioned at the array's first index, and each element represents your maximum jump length at that position.
**Sample Input 1**: `nums = [2,3,1,1,4]`  
**Expected Output 1**: `true`
**Sample Input 2**: `nums = [3,2,1,0,4]`  
**Expected Output 2**: `false`
**Links**: LeetCode: [55. Jump Game](https://leetcode.com/problems/jump-game/)

### 27. Merge Intervals

**Problem**: Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals.
**Sample Input 1**: `intervals = [[1,3],[2,6],[8,10],[15,18]]`  
**Expected Output 1**: `[[1,6],[8,10],[15,18]]`
**Sample Input 2**: `intervals = [[1,4],[4,5]]`  
**Expected Output 2**: `[[1,5]]`
**Links**: LeetCode: [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

### 28. Rotate Array

**Problem**: Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.
**Sample Input 1**: `nums = [1,2,3,4,5,6,7], k = 3`  
**Expected Output 1**: `[5,6,7,1,2,3,4]`
**Sample Input 2**: `nums = [-1,-100,3,99], k = 2`  
**Expected Output 2**: `[3,99,-1,-100]`
**Links**: LeetCode: [189. Rotate Array](https://leetcode.com/problems/rotate-array/)

### 29. Sort Colors

**Problem**: Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent.
**Sample Input 1**: `nums = [2,0,2,1,1,0]`  
**Expected Output 1**: `[0,0,1,1,2,2]`
**Sample Input 2**: `nums = [2,0,1]`  
**Expected Output 2**: `[0,1,2]`
**Links**: LeetCode: [75. Sort Colors](https://leetcode.com/problems/sort-colors/)

### 30. Subarray Sum Equals K

**Problem**: Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.
**Sample Input 1**: `nums = [1,1,1], k = 2`  
**Expected Output 1**: `2`
**Sample Input 2**: `nums = [1,2,3], k = 3`  
**Expected Output 2**: `2`
**Links**: LeetCode: [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

### 31. Spiral Matrix

**Problem**: Given an `m x n` matrix, return all elements of the matrix in spiral order.
**Sample Input 1**: `matrix = [[1,2,3],[4,5,6],[7,8,9]]`  
**Expected Output 1**: `[1,2,3,6,9,8,7,4,5]`
**Sample Input 2**: `matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]`  
**Expected Output 2**: `[1,2,3,4,8,12,11,10,9,5,6,7]`
**Links**: LeetCode: [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

### 32. Set Matrix Zeroes

**Problem**: Given an `m x n` integer matrix `matrix`, if an element is 0, set its entire row and column to 0's.
**Sample Input 1**: `matrix = [[1,1,1],[1,0,1],[1,1,1]]`  
**Expected Output 1**: `[[1,0,1],[0,0,0],[1,0,1]]`
**Sample Input 2**: `matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]`  
**Expected Output 2**: `[[0,0,0,0],[0,4,5,0],[0,3,1,0]]`
**Links**: LeetCode: [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)

### 33. 3Sum Closest

**Problem**: Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.
**Sample Input 1**: `nums = [-1,2,1,-4], target = 1`  
**Expected Output 1**: `2`
**Sample Input 2**: `nums = [0,0,0], target = 1`  
**Expected Output 2**: `0`
**Links**: LeetCode: [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/)

### 34. Insert Interval

**Problem**: You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]`. Insert `newInterval` into `intervals`.
**Sample Input 1**: `intervals = [[1,3],[6,9]], newInterval = [2,5]`  
**Expected Output 1**: `[[1,5],[6,9]]`
**Sample Input 2**: `intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]`  
**Expected Output 2**: `[[1,2],[3,10],[12,16]]`
**Links**: LeetCode: [57. Insert Interval](https://leetcode.com/problems/insert-interval/)

### 35. 4Sum

**Problem**: Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that `nums[a] + nums[b] + nums[c] + nums[d] == target`.
**Sample Input 1**: `nums = [1,0,-1,0,-2,2], target = 0`  
**Expected Output 1**: `[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`
**Sample Input 2**: `nums = [2,2,2,2,2], target = 8`  
**Expected Output 2**: `[[2,2,2,2]]`
**Links**: LeetCode: [18. 4Sum](https://leetcode.com/problems/4sum/)

## 🔴 Hard (36-50)

### 36. Trapping Rain Water

**Problem**: Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
**Sample Input 1**: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`  
**Expected Output 1**: `6`
**Sample Input 2**: `height = [4,2,0,3,2,5]`  
**Expected Output 2**: `9`
**Links**: LeetCode: [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

### 37. First Missing Positive

**Problem**: Given an unsorted integer array `nums`, return the smallest missing positive integer.
**Sample Input 1**: `nums = [1,2,0]`  
**Expected Output 1**: `3`
**Sample Input 2**: `nums = [3,4,-1,1]`  
**Expected Output 2**: `2`
**Links**: LeetCode: [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

### 38. Median of Two Sorted Arrays

**Problem**: Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.
**Sample Input 1**: `nums1 = [1,3], nums2 = [2]`  
**Expected Output 1**: `2.00000`
**Sample Input 2**: `nums1 = [1,2], nums2 = [3,4]`  
**Expected Output 2**: `2.50000`
**Links**: LeetCode: [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### 39. Sliding Window Maximum

**Problem**: You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right.
**Sample Input 1**: `nums = [1,3,-1,-3,5,3,6,7], k = 3`  
**Expected Output 1**: `[3,3,5,5,6,7]`
**Sample Input 2**: `nums = [1], k = 1`  
**Expected Output 2**: `[1]`
**Links**: LeetCode: [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

### 40. Largest Rectangle in Histogram

**Problem**: Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle.
**Sample Input 1**: `heights = [2,1,5,6,2,3]`  
**Expected Output 1**: `10`
**Sample Input 2**: `heights = [2,4]`  
**Expected Output 2**: `4`
**Links**: LeetCode: [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

### 41. Minimum Window Substring

**Problem**: Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` is included.
**Sample Input 1**: `s = "ADOBECODEBANC", t = "ABC"`  
**Expected Output 1**: `"BANC"`
**Sample Input 2**: `s = "a", t = "a"`  
**Expected Output 2**: `"a"`
**Links**: LeetCode: [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

### 42. Maximal Rectangle

**Problem**: Given a `rows x cols` binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
**Sample Input 1**: `matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]`  
**Expected Output 1**: `6`
**Sample Input 2**: `matrix = [["0"]]`  
**Expected Output 2**: `0`
**Links**: LeetCode: [85. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)

### 43. Best Time to Buy and Sell Stock III

**Problem**: You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day. Find the maximum profit you can achieve with at most two transactions.
**Sample Input 1**: `prices = [3,3,5,0,0,3,1,4]`  
**Expected Output 1**: `6`
**Sample Input 2**: `prices = [1,2,3,4,5]`  
**Expected Output 2**: `4`
**Links**: LeetCode: [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

### 44. Count of Smaller Numbers After Self

**Problem**: Given an integer array `nums`, return an integer array `counts` where `counts[i]` is the number of smaller elements to the right of `nums[i]`.
**Sample Input 1**: `nums = [5,2,6,1]`  
**Expected Output 1**: `[2,1,1,0]`
**Sample Input 2**: `nums = [-1]`  
**Expected Output 2**: `[0]`
**Links**: LeetCode: [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)

### 45. Find Median from Data Stream

**Problem**: The median is the middle value in an ordered integer list. Design a data structure that supports adding integers and finding the median.
**Sample Input 1**: `["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]`  
**Expected Output 1**: `[null, null, null, 1.5, null, 2.0]`
**Sample Input 2**: `addNum(1), addNum(2), findMedian() -> 1.5`  
**Expected Output 2**: `1.5`
**Links**: LeetCode: [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

### 46. Maximum Gap

**Problem**: Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form. If the array contains less than 2 elements, return 0.
**Sample Input 1**: `nums = [3,6,9,1]`  
**Expected Output 1**: `3`
**Sample Input 2**: `nums = [10]`  
**Expected Output 2**: `0`
**Links**: LeetCode: [164. Maximum Gap](https://leetcode.com/problems/maximum-gap/)

### 47. Longest Consecutive Sequence

**Problem**: Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.
**Sample Input 1**: `nums = [100,4,200,1,3,2]`  
**Expected Output 1**: `4`
**Sample Input 2**: `nums = [0,3,7,2,5,8,4,6,0,1]`  
**Expected Output 2**: `9`
**Links**: LeetCode: [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

### 48. Russian Doll Envelopes

**Problem**: You are given a 2D array of integers `envelopes` where `envelopes[i] = [wi, hi]` represents the width and height of an envelope.
**Sample Input 1**: `envelopes = [[5,4],[6,4],[6,7],[2,3]]`  
**Expected Output 1**: `3`
**Sample Input 2**: `envelopes = [[1,1],[1,1],[1,1]]`  
**Expected Output 2**: `1`
**Links**: LeetCode: [354. Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

### 49. Create Maximum Number

**Problem**: You are given two integer arrays `nums1` and `nums2` of lengths `m` and `n` respectively. Create the maximum number of length `k <= m + n` from digits of the two arrays.
**Sample Input 1**: `nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5`  
**Expected Output 1**: `[9,8,6,5,3]`
**Sample Input 2**: `nums1 = [6,7], nums2 = [6,0,4], k = 5`  
**Expected Output 2**: `[6,7,6,0,4]`
**Links**: LeetCode: [321. Create Maximum Number](https://leetcode.com/problems/create-maximum-number/)

### 50. Shortest Subarray with Sum at Least K

**Problem**: Given an integer array `nums` and an integer `k`, return the length of the shortest non-empty subarray of `nums` with a sum of at least `k`.
**Sample Input 1**: `nums = [1], k = 1`  
**Expected Output 1**: `1`
**Sample Input 2**: `nums = [1,2], k = 4`  
**Expected Output 2**: `-1`
**Links**: LeetCode: [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
