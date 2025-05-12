# Sliding Window Problems

## 🟢 Easy (1-15)

### 1. Maximum Subarray

**Problem**: Find the contiguous subarray with the largest sum.
**Sample Input**: `nums = [-2,1,-3,4,-1,2,1,-5,4]`  
**Expected Output**: `6` (The subarray [4,-1,2,1] has the largest sum = 6)
**Links**: LeetCode: [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### 2. Contains Duplicate II

**Problem**: Given an array and an integer k, check if there are two distinct indices i and j such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
**Sample Input**: `nums = [1,2,3,1], k = 3`  
**Expected Output**: `true` (because nums[0] = nums[3] and 3-0 ≤ 3)
**Links**: LeetCode: [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

### 3. Subarray Product Less Than K

**Problem**: Find the number of contiguous subarrays whose product is less than k.
**Sample Input**: `nums = [10,5,2,6], k = 100`  
**Expected Output**: `8` (The 8 subarrays are: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6])
**Links**: LeetCode: [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)

### 4. Longest Continuous Increasing Subsequence

**Problem**: Find the length of the longest continuous increasing subsequence.
**Sample Input**: `nums = [1,3,5,4,7]`  
**Expected Output**: `3` (The longest continuous increasing subsequence is [1,3,5])
**Links**: LeetCode: [674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

### 5. Maximum Average Subarray I

**Problem**: Find the contiguous subarray of given length k that has the maximum average value.
**Sample Input**: `nums = [1,12,-5,-6,50,3], k = 4`  
**Expected Output**: `12.75` (Maximum average is (12-5-6+50)/4 = 51/4 = 12.75)
**Links**: LeetCode: [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

### 6. Max Consecutive Ones

**Problem**: Find the maximum number of consecutive 1's in an array.
**Sample Input**: `nums = [1,1,0,1,1,1]`  
**Expected Output**: `3`
**Links**: LeetCode: [485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)

### 7. Diet Plan Performance

**Problem**: Evaluate the performance of a diet plan based on calories consumed in consecutive days.
**Sample Input**: `calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3`  
**Expected Output**: `0` (No points gained or lost)
**Links**: LeetCode: [1176. Diet Plan Performance](https://leetcode.com/problems/diet-plan-performance/)

### 8. Maximum Size Subarray Sum Equals k

**Problem**: Find the maximum length of a contiguous subarray with sum equal to k.
**Sample Input**: `nums = [1,-1,5,-2,3], k = 3`  
**Expected Output**: `4` (The subarray [1,-1,5,-2] sums to 3 and is the longest)
**Links**: LeetCode: [325. Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)

### 9. K Items With the Maximum Sum

**Problem**: Select k numbers from given collection to maximize sum.
**Sample Input**: `numOnes = 3, numZeros = 1, numNegOnes = 2, k = 4`  
**Expected Output**: `2` (We take 3 ones and 1 zero)
**Links**: LeetCode: [2600. K Items With the Maximum Sum](https://leetcode.com/problems/k-items-with-the-maximum-sum/)

### 10. Find All Anagrams in a String

**Problem**: Find all start indices of anagrams of pattern p in string s.
**Sample Input**: `s = "cbaebabacd", p = "abc"`  
**Expected Output**: `[0,6]` (The substrings starting at index 0 and 6 are "cba" and "bac", both anagrams of "abc")
**Links**: LeetCode: [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

### 11. Grumpy Bookstore Owner

**Problem**: Calculate the maximum number of customers that can be satisfied after owner uses secret technique.
**Sample Input**: `customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3`  
**Expected Output**: `16`
**Links**: LeetCode: [1052. Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)

### 12. Defuse the Bomb

**Problem**: Replace each element with sum of next k elements (or previous k elements if k is negative).
**Sample Input**: `code = [5,7,1,4], k = 3`  
**Expected Output**: `[12,10,16,13]`
**Links**: LeetCode: [1652. Defuse the Bomb](https://leetcode.com/problems/defuse-the-bomb/)

### 13. Count Number of Nice Subarrays

**Problem**: Count the number of subarrays with exactly k odd integers.
**Sample Input**: `nums = [1,1,2,1,1], k = 3`  
**Expected Output**: `2` (The subarrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1])
**Links**: LeetCode: [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)

### 14. Longest Subarray of 1's After Deleting One Element

**Problem**: Find the longest subarray of 1's after deleting exactly one element.
**Sample Input**: `nums = [1,1,0,1]`  
**Expected Output**: `3` (After deleting the 0, we get [1,1,1])
**Links**: LeetCode: [1493. Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

### 15. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

**Problem**: Count subarrays of size k with average greater than or equal to threshold.
**Sample Input**: `arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4`  
**Expected Output**: `3`
**Links**: LeetCode: [1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)

## 🟠 Medium (16-35)

### 16. Longest Substring Without Repeating Characters

**Problem**: Find the length of the longest substring without repeating characters.
**Sample Input**: `s = "abcabcbb"`  
**Expected Output**: `3` (The longest substring is "abc")
**Links**: LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### 17. Permutation in String

**Problem**: Check if one string's permutation is the substring of another string.
**Sample Input**: `s1 = "ab", s2 = "eidbaooo"`  
**Expected Output**: `true` (s2 contains a permutation of s1: "ba")
**Links**: LeetCode: [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)

### 18. Minimum Size Subarray Sum

**Problem**: Find the minimal length of a contiguous subarray with sum at least equal to target.
**Sample Input**: `target = 7, nums = [2,3,1,2,4,3]`  
**Expected Output**: `2` (The subarray [4,3] has minimal length with sum ≥ 7)
**Links**: LeetCode: [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

### 19. Fruit Into Baskets

**Problem**: Find the length of the longest subarray with at most two distinct elements.
**Sample Input**: `fruits = [1,2,1]`  
**Expected Output**: `3` (We can pick from all of them)
**Links**: LeetCode: [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)

### 20. Max Consecutive Ones III

**Problem**: Find the longest subarray of 1's after flipping at most k 0's.
**Sample Input**: `nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2`  
**Expected Output**: `6` (Flip the 0's at positions 5 and 10 to get longest)
**Links**: LeetCode: [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)

### 21. Binary Subarrays With Sum

**Problem**: Find the number of contiguous subarrays that sum to goal.
**Sample Input**: `nums = [1,0,1,0,1], goal = 2`  
**Expected Output**: `4` (The subarrays are [1,0,1], [1,0,1], [0,1,0,1], and [1,0,1])
**Links**: LeetCode: [930. Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)

### 22. Longest Repeating Character Replacement

**Problem**: Find the length of the longest substring containing the same letter after replacing at most k characters.
**Sample Input**: `s = "AABABBA", k = 1`  
**Expected Output**: `4` (Replace the one 'A' in the middle with 'B' and form "BBBB")
**Links**: LeetCode: [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

### 23. Subarrays with K Different Integers

**Problem**: Find the number of subarrays with exactly k distinct integers.
**Sample Input**: `nums = [1,2,1,2,3], k = 2`  
**Expected Output**: `7` (The subarrays are [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2])
**Links**: LeetCode: [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)

### 24. Longest Substring with At Most K Distinct Characters

**Problem**: Find the length of the longest substring with at most k distinct characters.
**Sample Input**: `s = "eceba", k = 2`  
**Expected Output**: `3` (The substring is "ece")
**Links**: LeetCode: [340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)

### 25. Replace the Substring for Balanced String

**Problem**: Replace a substring to make a string balanced (each character appears exactly n/4 times).
**Sample Input**: `s = "QWER"`  
**Expected Output**: `0` (The string is already balanced)
**Links**: LeetCode: [1234. Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)

### 26. Maximum Points You Can Obtain from Cards

**Problem**: Maximize score by taking exactly k cards from either end of the array.
**Sample Input**: `cardPoints = [1,2,3,4,5,6,1], k = 3`  
**Expected Output**: `12` (Take cards 1, 6, and 5 for maximum points)
**Links**: LeetCode: [1423. Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)

### 27. Constrained Subsequence Sum

**Problem**: Find the maximum sum of a subsequence with constraints.
**Sample Input**: `nums = [10,2,-10,5,20], k = 2`  
**Expected Output**: `37` (The subsequence is [10, 2, 5, 20])
**Links**: LeetCode: [1425. Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

### 28. Count Good Meals

**Problem**: Count the number of pairs of arrays that sum to a power of two.
**Sample Input**: `deliciousness = [1,3,5,7,9]`  
**Expected Output**: `4` (The pairs are (1,3), (1,7), (3,5), (7,9))
**Links**: LeetCode: [1711. Count Good Meals](https://leetcode.com/problems/count-good-meals/)

### 29. Get Equal Substrings Within Budget

**Problem**: Find the maximum length of a substring that can be changed to match.
**Sample Input**: `s = "abcd", t = "bcdf", maxCost = 3`  
**Expected Output**: `3` (The substring "abc" can be changed to "bcd" with cost 3)
**Links**: LeetCode: [1208. Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/)

### 30. Maximum Erasure Value

**Problem**: Find the maximum sum of a subarray with unique elements.
**Sample Input**: `nums = [4,2,4,5,6]`  
**Expected Output**: `17` (The subarray [2,4,5,6] has sum 17 and all elements are unique)
**Links**: LeetCode: [1695. Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/)

### 31. Count Number of Homogenous Substrings

**Problem**: Count number of contiguous substrings consisting of the same character.
**Sample Input**: `s = "abbcccaa"`  
**Expected Output**: `13` (The homogenous substrings are "a", "b", "b", "c", "c", "c", "a", "a", "bb", "cc", "ccc", "aa")
**Links**: LeetCode: [1759. Count Number of Homogenous Substrings](https://leetcode.com/problems/count-number-of-homogenous-substrings/)

### 32. Number of Substrings Containing All Three Characters

**Problem**: Count substrings that contain all three characters: 'a', 'b', and 'c'.
**Sample Input**: `s = "abcabc"`  
**Expected Output**: `10` (Various substrings containing at least one of each 'a', 'b', and 'c')
**Links**: LeetCode: [1358. Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)

### 33. Subarrays with K Different Integers

**Problem**: Count the number of subarrays with exactly K different integers.
**Sample Input**: `nums = [1,2,1,2,3], k = 2`  
**Expected Output**: `7` (The subarrays are [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2])
**Links**: LeetCode: [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)

### 34. Frequency of the Most Frequent Element

**Problem**: Find the maximum possible frequency of an element after performing at most k operations.
**Sample Input**: `nums = [1,2,4], k = 5`  
**Expected Output**: `3` (We can make all elements equal to 4)
**Links**: LeetCode: [1838. Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/)

### 35. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

**Problem**: Find the length of the longest subarray with absolute difference ≤ limit.
**Sample Input**: `nums = [8,2,4,7], limit = 4`  
**Expected Output**: `2` (The subarray [2,4] has absolute diff ≤ 4)
**Links**: LeetCode: [1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

## 🔴 Hard (36-50)

### 36. Minimum Window Substring

**Problem**: Find the smallest substring that contains all characters of another string.
**Sample Input**: `s = "ADOBECODEBANC", t = "ABC"`  
**Expected Output**: `"BANC"` (The minimum window substring that contains all characters of "ABC")
**Links**: LeetCode: [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

### 37. Sliding Window Median

**Problem**: Find the median of each window of size k in an array.
**Sample Input**: `nums = [1,3,-1,-3,5,3,6,7], k = 3`  
**Expected Output**: `[1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]`
**Links**: LeetCode: [480. Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)

### 38. Sliding Window Maximum

**Problem**: Find the maximum element in each sliding window of size k.
**Sample Input**: `nums = [1,3,-1,-3,5,3,6,7], k = 3`  
**Expected Output**: `[3,3,5,5,6,7]`
**Links**: LeetCode: [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

### 39. Shortest Subarray with Sum at Least K

**Problem**: Find the length of the shortest subarray with sum at least K.
**Sample Input**: `nums = [2,-1,2], k = 3`  
**Expected Output**: `3` (The entire array sums to 3, which is the shortest)
**Links**: LeetCode: [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

### 40. Minimum Number of K Consecutive Bit Flips

**Problem**: Find the minimum number of k-bit flips to make all bits in the array equal to 1.
**Sample Input**: `nums = [0,1,0], k = 1`  
**Expected Output**: `2` (Flip first and third bit)
**Links**: LeetCode: [995. Minimum Number of K Consecutive Bit Flips](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/)

### 41. Minimum Number of Flips to Make the Binary String Alternating

**Problem**: Find the minimum number of bit flips to make the binary string alternating.
**Sample Input**: `s = "111000"`  
**Expected Output**: `2` (Flip 2nd and 5th bits)
**Links**: LeetCode: [1888. Minimum Number of Flips to Make the Binary String Alternating](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/)

### 42. Count Subarrays With Fixed Bounds

**Problem**: Count subarrays where max is maxK and min is minK.
**Sample Input**: `nums = [1,3,5,2,7,5], minK = 1, maxK = 5`  
**Expected Output**: `2` (Subarrays [1,3,5] and [1,3,5,2])
**Links**: LeetCode: [2444. Count Subarrays With Fixed Bounds](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)

### 43. Substring with Concatenation of All Words

**Problem**: Find all starting indices of substrings that are concatenations of all given words.
**Sample Input**: `s = "barfoothefoobarman", words = ["foo","bar"]`  
**Expected Output**: `[0,9]` (The concatenations "barfoo" and "foobar" start at indices 0 and 9)
**Links**: LeetCode: [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

### 44. Minimum Operations to Reduce X to Zero

**Problem**: Find the minimum operations to reduce x to zero by removing elements from left or right.
**Sample Input**: `nums = [1,1,4,2,3], x = 5`  
**Expected Output**: `2` (Remove the first two elements: 1+1=2, and the last element: 3, to get sum 5)
**Links**: LeetCode: [1658. Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)

### 45. Max Value of Equation

**Problem**: Find the maximum value of yi + yj + |xi - xj| where i < j.
**Sample Input**: `points = [[1,3],[2,0],[5,10],[6,-10]], k = 1`  
**Expected Output**: `4` (The first two points satisfy the constraint)
**Links**: LeetCode: [1499. Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)

### 46. Maximize the Confusion of an Exam

**Problem**: Find the maximum consecutive answers after changing at most k answers.
**Sample Input**: `answerKey = "TTFF", k = 2`  
**Expected Output**: `4` (Change both 'F's to 'T')
**Links**: LeetCode: [2024. Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/)

### 47. Maximum Number of Visible Points

**Problem**: Find the maximum number of points that can be seen by an observer at given location within given angle.
**Sample Input**: `points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]`  
**Expected Output**: `3` (All points are visible)
**Links**: LeetCode: [1610. Maximum Number of Visible Points](https://leetcode.com/problems/maximum-number-of-visible-points/)

### 48. Count Subarrays With Score Less Than K

**Problem**: Count subarrays where score (sum \* length) is less than k.
**Sample Input**: `nums = [2,1,4,3,5], k = 10`  
**Expected Output**: `6` (Subarrays with score < 10: [2], [1], [4], [3], [5], [2,1])
**Links**: LeetCode: [2302. Count Subarrays With Score Less Than K](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/)

### 49. Jump Game VII

**Problem**: Determine if you can reach the last index by jumping to 0s according to min/max jump lengths.
**Sample Input**: `s = "011010", minJump = 2, maxJump = 3`  
**Expected Output**: `true` (Start at index 0, jump to index 3, then to index 5)
**Links**: LeetCode: [1871. Jump Game VII](https://leetcode.com/problems/jump-game-vii/)

### 50. Maximum Candies Allocated to K Children

**Problem**: Find the maximum number of candies that can be distributed equally to k children.
**Sample Input**: `candies = [5,8,6], k = 3`  
**Expected Output**: `5` (Each child gets 5 candies: 5 from first pile, 5+3 from second pile, 5+1 from third pile)
**Links**: LeetCode: [2226. Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)
