# Two Pointer Problems

## 🟢 Easy (1-20)

### 1. Valid Palindrome

**Problem**: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
**Sample Input 1**: `s = "A man, a plan, a canal: Panama"`  
**Expected Output 1**: `true`
**Sample Input 2**: `s = "race a car"`  
**Expected Output 2**: `false`
**Links**: LeetCode: [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

### 2. Remove Duplicates from Sorted Array

**Problem**: Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.
**Sample Input**: `nums = [1, 1, 2, 2, 3, 4, 4, 5]`  
**Expected Output**: `5` (with first five elements being `[1, 2, 3, 4, 5]`)
**Links**: LeetCode: [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

### 3. Merge Sorted Array

**Problem**: Given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
**Sample Input**: `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`  
**Expected Output**: `[1,2,2,3,5,6]`
**Links**: LeetCode: [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

### 4. Move Zeroes

**Problem**: Given an array nums, move all 0's to the end while maintaining the relative order of non-zero elements.
**Sample Input**: `nums = [0,1,0,3,12]`  
**Expected Output**: `[1,3,12,0,0]`
**Links**: LeetCode: [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

### 5. Reverse String

**Problem**: Write a function that reverses a string. The input string is given as an array of characters.
**Sample Input**: `s = ["h","e","l","l","o"]`  
**Expected Output**: `["o","l","l","e","h"]`
**Links**: LeetCode: [344. Reverse String](https://leetcode.com/problems/reverse-string/)

### 6. Squares of a Sorted Array

**Problem**: Given an array of integers sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
**Sample Input**: `nums = [-4,-1,0,3,10]`  
**Expected Output**: `[0,1,9,16,100]`
**Links**: LeetCode: [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

### 7. Backspace String Compare

**Problem**: Given two strings S and T, return if they are equal when both are typed into empty text editors (# means a backspace character).
**Sample Input**: `S = "ab#c", T = "ad#c"`  
**Expected Output**: `true` (Both result in "ac")
**Links**: LeetCode: [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)

<!-- NOTE: skipped -->

### 8. Intersection of Two Arrays II

**Problem**: Given two arrays, write a function to compute their intersection.
**Sample Input**: `nums1 = [1,2,2,1], nums2 = [2,2]`  
**Expected Output**: `[2,2]`
**Links**: LeetCode: [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

### 9. Remove Element

**Problem**: Given an array nums and a value val, remove all instances of that value in-place and return the new length.
**Sample Input**: `nums = [3,2,2,3], val = 3`  
**Expected Output**: `2` (with first two elements being `[2,2]`)
**Links**: LeetCode: [27. Remove Element](https://leetcode.com/problems/remove-element/)

### 10. Is Subsequence

**Problem**: Given two strings s and t, check if s is a subsequence of t.
**Sample Input**: `s = "abc", t = "ahbgdc"`  
**Expected Output**: `true`
**Links**: LeetCode: [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)

<!-- NOTE: skipped -->

### 11. Linked List Cycle

**Problem**: Given a linked list, determine if it has a cycle in it.
**Sample Input**: `head = [3,2,0,-4]` with a cycle from the last node to the second node
**Expected Output**: `true`
**Links**: LeetCode: [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

<!-- NOTE: skipped -->

### 12. Middle of the Linked List

**Problem**: Find the middle node of a linked list.
**Sample Input**: `head = [1,2,3,4,5]`  
**Expected Output**: `[3,4,5]` (the middle is node 3)
**Links**: LeetCode: [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

### 13. Sort Array By Parity

**Problem**: Given an array of integers, sort it so that all even numbers come before odd numbers.
**Sample Input**: `[3,1,2,4]`  
**Expected Output**: `[2,4,3,1]` (or any array with evens before odds)
**Links**: LeetCode: [905. Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)

### 14. Number of Segments in a String

**Problem**: Count the number of segments in a string (a segment is a contiguous sequence of non-space characters).
**Sample Input**: `s = "Hello, my name is John"`  
**Expected Output**: `5`
**Links**: LeetCode: [434. Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string/)

### 15. Reverse Only Letters

**Problem**: Reverse only the letters in a string, leaving special characters in place.
**Sample Input**: `s = "a-bC-dEf-ghIj"`  
**Expected Output**: `"j-Ih-gfE-dCba"`
**Links**: LeetCode: [917. Reverse Only Letters](https://leetcode.com/problems/reverse-only-letters/)

### 16. Long Pressed Name

**Problem**: Determine if a name could have been long pressed (keys held too long) to form another name.
**Sample Input**: `name = "alex", typed = "aaleex"`  
**Expected Output**: `true`
**Links**: LeetCode: [925. Long Pressed Name](https://leetcode.com/problems/long-pressed-name/)

### 17. Palindrome Linked List

**Problem**: Given a singly linked list, determine if it is a palindrome.
**Sample Input**: `head = [1,2,2,1]`  
**Expected Output**: `true`
**Links**: LeetCode: [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

### 18. Remove Duplicates from Sorted List

**Problem**: Given a sorted linked list, delete all duplicates such that each element appears only once.
**Sample Input**: `head = [1,1,2,3,3]`  
**Expected Output**: `[1,2,3]`
**Links**: LeetCode: [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

### 19. Flipping an Image

**Problem**: Given a binary matrix, flip it horizontally, then invert it, and return the resulting image.
**Sample Input**: `[[1,1,0],[1,0,1],[0,0,0]]`  
**Expected Output**: `[[1,0,0],[0,1,0],[1,1,1]]`
**Links**: LeetCode: [832. Flipping an Image](https://leetcode.com/problems/flipping-an-image/)

### 20. Maximum Distance to Closest Person

**Problem**: Find the maximum distance you need to walk to reach the closest person in a row of seats.
**Sample Input**: `seats = [1,0,0,0,1,0,1]`  
**Expected Output**: `2`
**Links**: LeetCode: [849. Maximum Distance to Closest Person](https://leetcode.com/problems/maximize-distance-to-closest-person/)

## 🟠 Medium (21-40)

### 21. Container With Most Water

**Problem**: Given n non-negative integers representing heights of lines, find two lines that together with the x-axis forms a container that holds the most water.
**Sample Input**: `height = [1,8,6,2,5,4,8,3,7]`  
**Expected Output**: `49`
**Links**: LeetCode: [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

### 22. 3Sum

**Problem**: Find all unique triplets in the array which gives the sum of zero.
**Sample Input**: `nums = [-1,0,1,2,-1,-4]`  
**Expected Output**: `[[-1,-1,2],[-1,0,1]]`
**Links**: LeetCode: [15. 3Sum](https://leetcode.com/problems/3sum/)

### 23. Sort Colors

**Problem**: Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent.
**Sample Input**: `nums = [2,0,2,1,1,0]`  
**Expected Output**: `[0,0,1,1,2,2]`
**Links**: LeetCode: [75. Sort Colors](https://leetcode.com/problems/sort-colors/)

### 24. Next Permutation

**Problem**: Implement next permutation, which rearranges numbers into the lexicographically next greater permutation.
**Sample Input**: `nums = [1,2,3]`  
**Expected Output**: `[1,3,2]`
**Links**: LeetCode: [31. Next Permutation](https://leetcode.com/problems/next-permutation/)

### 25. Partition Labels

**Problem**: Partition a string into as many parts as possible so that each letter appears in at most one part.
**Sample Input**: `S = "ababcbacadefegdehijhklij"`  
**Expected Output**: `[9,7,8]` (The partitions are "ababcbaca", "defegde", "hijhklij")
**Links**: LeetCode: [763. Partition Labels](https://leetcode.com/problems/partition-labels/)

### 26. 3Sum Closest

**Problem**: Find three integers in an array that sum closest to a given target.
**Sample Input**: `nums = [-1,2,1,-4], target = 1`  
**Expected Output**: `2` (The sum that is closest to the target is 2. (-1 + 2 + 1 = 2))
**Links**: LeetCode: [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/)

### 27. Longest Mountain in Array

**Problem**: Return the length of the longest mountain subarray.
**Sample Input**: `A = [2,1,4,7,3,2,5]`  
**Expected Output**: `5` ([1,4,7,3,2] is a mountain)
**Links**: LeetCode: [845. Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array/)

### 28. Rotate Array

**Problem**: Rotate an array to the right by k steps.
**Sample Input**: `nums = [1,2,3,4,5,6,7], k = 3`  
**Expected Output**: `[5,6,7,1,2,3,4]`
**Links**: LeetCode: [189. Rotate Array](https://leetcode.com/problems/rotate-array/)

### 29. Find the Duplicate Number

**Problem**: Given an array nums containing n + 1 integers where each integer is between 1 and n, find the duplicate.
**Sample Input**: `nums = [1,3,4,2,2]`  
**Expected Output**: `2`
**Links**: LeetCode: [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

### 30. Remove Nth Node From End of List

**Problem**: Remove the nth node from the end of a linked list and return its head.
**Sample Input**: `head = [1,2,3,4,5], n = 2`  
**Expected Output**: `[1,2,3,5]`
**Links**: LeetCode: [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

### 31. 4Sum

**Problem**: Find all unique quadruplets in the array which gives the sum of target.
**Sample Input**: `nums = [1,0,-1,0,-2,2], target = 0`  
**Expected Output**: `[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`
**Links**: LeetCode: [18. 4Sum](https://leetcode.com/problems/4sum/)

### 32. Expressive Words

**Problem**: Find out how many stretched words match the given word.
**Sample Input**: `S = "heeellooo", words = ["hello", "hi", "helo"]`  
**Expected Output**: `1` (Only "hello" can be stretched to "heeellooo")
**Links**: LeetCode: [809. Expressive Words](https://leetcode.com/problems/expressive-words/)

### 33. Find K Closest Elements

**Problem**: Given a sorted array, find the k closest elements to a given value.
**Sample Input**: `arr = [1,2,3,4,5], k = 4, x = 3`  
**Expected Output**: `[1,2,3,4]`
**Links**: LeetCode: [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)

### 34. Minimum Size Subarray Sum

**Problem**: Find the minimal length of a contiguous subarray with a sum at least equal to a target sum.
**Sample Input**: `target = 7, nums = [2,3,1,2,4,3]`  
**Expected Output**: `2` (The subarray [4,3] has the minimal length)
**Links**: LeetCode: [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

### 35. Linked List Cycle II

**Problem**: Given a linked list, return the node where the cycle begins.
**Sample Input**: `head = [3,2,0,-4]` with a cycle from the last node to node at index 1
**Expected Output**: Node with value 2
**Links**: LeetCode: [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

### 36. Find All Anagrams in a String

**Problem**: Find all the start indices of anagrams of a pattern in a string.
**Sample Input**: `s = "cbaebabacd", p = "abc"`  
**Expected Output**: `[0,6]` (The substring starting at 0 and 6 are "cba" and "bac", which are anagrams of "abc")
**Links**: LeetCode: [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

### 37. String Compression

**Problem**: Compress a string such that 'aabccc' becomes 'a2b1c3'. If compressed string is not smaller, return the original string.
**Sample Input**: `chars = ["a","a","b","b","c","c","c"]`  
**Expected Output**: `6` (The first 6 characters are ["a","2","b","2","c","3"])
**Links**: LeetCode: [443. String Compression](https://leetcode.com/problems/string-compression/)

### 38. Longest Substring Without Repeating Characters

**Problem**: Find the length of the longest substring without repeating characters.
**Sample Input**: `s = "abcabcbb"`  
**Expected Output**: `3` (The answer is "abc", with the length of 3)
**Links**: LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### 39. Push Dominoes

**Problem**: Given a string representing dominos, predict the final state.
**Sample Input**: `dominoes = ".L.R...LR..L.."`  
**Expected Output**: `"LL.RR.LLRRLL.."`
**Links**: LeetCode: [838. Push Dominoes](https://leetcode.com/problems/push-dominoes/)

### 40. Interval List Intersections

**Problem**: Given two lists of closed intervals, find their intersection.
**Sample Input**: `A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]`  
**Expected Output**: `[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]`
**Links**: LeetCode: [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)

## 🔴 Hard (41-50)

### 41. Trapping Rain Water

**Problem**: Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.
**Sample Input**: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`  
**Expected Output**: `6`
**Links**: LeetCode: [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

### 42. Minimum Window Substring

**Problem**: Find the minimum window in a string which will contain all the characters in another string.
**Sample Input**: `s = "ADOBECODEBANC", t = "ABC"`  
**Expected Output**: `"BANC"`
**Links**: LeetCode: [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

### 43. Sliding Window Maximum

**Problem**: Given an array and a window size, find the maximum element in all possible windows.
**Sample Input**: `nums = [1,3,-1,-3,5,3,6,7], k = 3`  
**Expected Output**: `[3,3,5,5,6,7]`
**Links**: LeetCode: [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

### 44. Shortest Subarray with Sum at Least K

**Problem**: Find the length of the shortest, non-empty, contiguous subarray with sum at least k.
**Sample Input**: `A = [2,-1,2], K = 3`  
**Expected Output**: `3`
**Links**: LeetCode: [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

### 45. Longest Valid Parentheses

**Problem**: Find the length of the longest valid (well-formed) parentheses substring.
**Sample Input**: `s = ")()())"`  
**Expected Output**: `4` (The longest valid parentheses substring is "()()")
**Links**: LeetCode: [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)

### 46. Subarrays with K Different Integers

**Problem**: Find the number of subarrays with exactly K different integers.
**Sample Input**: `A = [1,2,1,2,3], K = 2`  
**Expected Output**: `7`
**Links**: LeetCode: [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)

### 47. Smallest Range Covering Elements from K Lists

**Problem**: Find the smallest range that includes at least one number from each of the k lists.
**Sample Input**: `nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]`  
**Expected Output**: `[20,24]`
**Links**: LeetCode: [632. Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)

### 48. Count of Range Sum

**Problem**: Given an integer array nums, return the number of range sums that lie in the inclusive range [lower, upper].
**Sample Input**: `nums = [-2,5,-1], lower = -2, upper = 2`  
**Expected Output**: `3`
**Links**: LeetCode: [327. Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

### 49. K-th Smallest Prime Fraction

**Problem**: Given a sorted list of positive fractions, find the K-th smallest fraction.
**Sample Input**: `arr = [1,2,3,5], K = 3`  
**Expected Output**: `[2,5]`
**Links**: LeetCode: [786. K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/)

### 50. Substring with Concatenation of All Words

**Problem**: Find all starting indices of substring(s) that is a concatenation of each word in words exactly once.
**Sample Input**: `s = "barfoothefoobarman", words = ["foo","bar"]`  
**Expected Output**: `[0,9]`
**Links**: LeetCode: [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words)
