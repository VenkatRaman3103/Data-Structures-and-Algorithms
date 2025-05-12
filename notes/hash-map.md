# Hash Map Problems

## 🟢 Easy (1-15)

### 1. Two Sum

**Problem**: Given an array of integers and a target sum, return the indices of two numbers that add up to the target.
**Sample Input 1**: `nums = [2, 7, 11, 15], target = 9`  
**Expected Output 1**: `[0, 1]` (because nums[0] + nums[1] = 2 + 7 = 9)
**Sample Input 2**: `nums = [3, 2, 4], target = 6`  
**Expected Output 2**: `[1, 2]` (because nums[1] + nums[2] = 2 + 4 = 6)
**Links:**

- LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/)
- HackerRank: [Sock Merchant](https://www.hackerrank.com/challenges/sock-merchant/problem) - Similar hashing concept

### 2. Contains Duplicate

**Problem**: Given an integer array, return true if any value appears at least twice, and false if every element is distinct.
**Sample Input 1**: `nums = [1, 2, 3, 1]`  
**Expected Output 1**: `true` (1 appears twice)
**Sample Input 2**: `nums = [1, 2, 3, 4]`  
**Expected Output 2**: `false` (all elements are distinct)
**Links:**

- LeetCode: [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- GeeksforGeeks: [Check if array contains duplicate elements within k distance](https://www.geeksforgeeks.org/check-if-array-contains-duplicate-elements-within-k-distance/)

### 3. First Unique Character in a String

**Problem**: Given a string, find the first non-repeating character and return its index. If it doesn't exist, return -1.
**Sample Input 1**: `s = "leetcode"`  
**Expected Output 1**: `0` ('l' is the first unique character)
**Sample Input 2**: `s = "loveleetcode"`  
**Expected Output 2**: `2` ('v' is the first unique character)
**Links:**

- LeetCode: [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
- GeeksforGeeks: [Given a string, find its first non-repeating character](https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/)

### 4. Valid Anagram

**Problem**: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
**Sample Input 1**: `s = "anagram", t = "nagaram"`  
**Expected Output 1**: `true`
**Sample Input 2**: `s = "rat", t = "car"`  
**Expected Output 2**: `false`
**Links:**

- LeetCode: [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)
- GeeksforGeeks: [Check whether two strings are anagram of each other](https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/)

### 5. Intersection of Two Arrays

**Problem**: Given two integer arrays, return their intersection (elements that appear in both arrays).
**Sample Input 1**: `nums1 = [1,2,2,1], nums2 = [2,2]`  
**Expected Output 1**: `[2]` (2 appears in both arrays)
**Sample Input 2**: `nums1 = [4,9,5], nums2 = [9,4,9,8,4]`  
**Expected Output 2**: `[4,9]` (order doesn't matter)
**Links:**

- LeetCode: [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)
- GeeksforGeeks: [Intersection of two arrays](https://www.geeksforgeeks.org/intersection-of-two-arrays/)

### 6. Find All Duplicates in an Array

**Problem**: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements that appear twice.
**Sample Input 1**: `nums = [4,3,2,7,8,2,3,1]`  
**Expected Output 1**: `[2,3]` (2 and 3 each appear twice)
**Sample Input 2**: `nums = [1,1,2]`  
**Expected Output 2**: `[1]` (only 1 appears twice)
**Links:**

- LeetCode: [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
- GeeksforGeeks: [Find duplicates in a given array when elements are not limited to a range](https://www.geeksforgeeks.org/find-duplicates-in-a-given-array-when-elements-are-not-limited-to-a-range/)

### 7. Ransom Note

**Problem**: Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
**Sample Input 1**: `ransomNote = "a", magazine = "b"`  
**Expected Output 1**: `false`
**Sample Input 2**: `ransomNote = "aa", magazine = "aab"`  
**Expected Output 2**: `true`
**Links:**

- LeetCode: [383. Ransom Note](https://leetcode.com/problems/ransom-note/)
- HackerRank: [Hash Tables: Ransom Note](https://www.hackerrank.com/challenges/ctci-ransom-note/problem)

### 8. Missing Number

**Problem**: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.
**Sample Input 1**: `nums = [3,0,1]`  
**Expected Output 1**: `2`
**Sample Input 2**: `nums = [9,6,4,2,3,5,7,0,1]`  
**Expected Output 2**: `8`
**Links:**

- LeetCode: [268. Missing Number](https://leetcode.com/problems/missing-number/)
- GeeksforGeeks: [Find the missing number in an array](https://www.geeksforgeeks.org/find-the-missing-number/)

### 9. Jewels and Stones

**Problem**: You're given strings J representing types of jewels, and S representing stones. Each character in S is a type of stone. Return how many stones are also jewels.
**Sample Input 1**: `J = "aA", S = "aAAbbbb"`  
**Expected Output 1**: `3`
**Sample Input 2**: `J = "z", S = "ZZ"`  
**Expected Output 2**: `0`
**Links:**

- LeetCode: [771. Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/)
- GeeksforGeeks: [Count of strings present in both arrays](https://www.geeksforgeeks.org/count-of-strings-present-in-both-arrays/)

### 10. Find Common Characters

**Problem**: Given an array of strings, find all characters that appear in all strings (including duplicates).
**Sample Input 1**: `["bella","label","roller"]`  
**Expected Output 1**: `["e","l","l"]` (e appears once in each, l appears twice in each)
**Sample Input 2**: `["cool","lock","cook"]`  
**Expected Output 2**: `["c","o"]`
**Links:**

- LeetCode: [1002. Find Common Characters](https://leetcode.com/problems/find-common-characters/)
- GeeksforGeeks: [Common characters in n strings](https://www.geeksforgeeks.org/common-characters-n-strings/)

### 11. Word Pattern

**Problem**: Given a pattern and a string, find if the string follows the same pattern.
**Sample Input 1**: `pattern = "abba", s = "dog cat cat dog"`  
**Expected Output 1**: `true`
**Sample Input 2**: `pattern = "abba", s = "dog cat cat fish"`  
**Expected Output 2**: `false`
**Links:**

- LeetCode: [290. Word Pattern](https://leetcode.com/problems/word-pattern/)
- GeeksforGeeks: [Check if a given string follows a given pattern](https://www.geeksforgeeks.org/check-if-a-given-string-follows-a-given-pattern/)

### 12. Count Common Words With One Occurrence

**Problem**: Given two string arrays words1 and words2, return the number of words that appear exactly once in each array.
**Sample Input 1**: `words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]`  
**Expected Output 1**: `2` ("leetcode" and "amazing" appear exactly once in both arrays)
**Sample Input 2**: `words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]`  
**Expected Output 2**: `0` (no common words)
**Links:**

- LeetCode: [2085. Count Common Words With One Occurrence](https://leetcode.com/problems/count-common-words-with-one-occurrence/)
- GeeksforGeeks: [Count common characters present in all strings](https://www.geeksforgeeks.org/count-common-characters-present-in-all-strings/)

### 13. Find the Difference

**Problem**: Given two strings s and t which consist of only lowercase letters. String t is generated by random shuffling string s and then add one more letter at a random position. Find the letter that was added in t.
**Sample Input 1**: `s = "abcd", t = "abcde"`  
**Expected Output 1**: `"e"` (e is the added letter)
**Sample Input 2**: `s = "", t = "y"`  
**Expected Output 2**: `"y"` (y is the added letter)
**Links:**

- LeetCode: [389. Find the Difference](https://leetcode.com/problems/find-the-difference/)
- GeeksforGeeks: [Find one extra character in a string](https://www.geeksforgeeks.org/find-one-extra-character-string/)

### 14. Find Numbers with Even Number of Digits

**Problem**: Given an array of integers, return how many contain an even number of digits.
**Sample Input 1**: `nums = [12,345,2,6,7896]`  
**Expected Output 1**: `2` (12 has 2 digits, 7896 has 4 digits)
**Sample Input 2**: `nums = [555,901,482,1771]`  
**Expected Output 2**: `1` (1771 has 4 digits)
**Links:**

- LeetCode: [1295. Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
- GeeksforGeeks: [Count of array elements with even number of digits](https://www.geeksforgeeks.org/count-of-array-elements-with-even-number-of-digits/)

### 15. Uncommon Words from Two Sentences

**Problem**: Find all the uncommon words from two given sentences.
**Sample Input 1**: `s1 = "this apple is sweet", s2 = "this apple is sour"`  
**Expected Output 1**: `["sweet","sour"]` (words that appear in only one sentence)
**Sample Input 2**: `s1 = "apple apple", s2 = "banana"`  
**Expected Output 2**: `["banana"]` ("apple" appears twice in s1, so it's not uncommon)
**Links:**

- LeetCode: [884. Uncommon Words from Two Sentences](https://leetcode.com/problems/uncommon-words-from-two-sentences/)
- GeeksforGeeks: [Uncommon characters of the given two strings](https://www.geeksforgeeks.org/uncommon-characters-two-strings/)

## 🟡 Medium (16-35)

### 16. Group Anagrams

**Problem**: Given an array of strings, group anagrams together (strings that contain the same characters but in different orders).
**Sample Input 1**: `strs = ["eat","tea","tan","ate","nat","bat"]`  
**Expected Output 1**: `[["bat"],["nat","tan"],["ate","eat","tea"]]`
**Sample Input 2**: `strs = [""]`  
**Expected Output 2**: `[[""]]`
**Links:**

- LeetCode: [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- GeeksforGeeks: [Given a sequence of words, print all anagrams together](https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/)

### 17. Longest Substring Without Repeating Characters

**Problem**: Given a string, find the length of the longest substring without repeating characters.
**Sample Input 1**: `s = "abcabcbb"`  
**Expected Output 1**: `3` ("abc" is the longest substring)
**Sample Input 2**: `s = "bbbbb"`  
**Expected Output 2**: `1` ("b" is the longest substring)
**Links:**

- LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- GeeksforGeeks: [Length of the longest substring without repeating characters](https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/)

### 18. Subarray Sum Equals K

**Problem**: Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals k.
**Sample Input 1**: `nums = [1,1,1], k = 2`  
**Expected Output 1**: `2` (subarrays [1,1] appear twice)
**Sample Input 2**: `nums = [1,2,3], k = 3`  
**Expected Output 2**: `2` (subarrays [1,2] and [3])
**Links:**

- LeetCode: [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
- GeeksforGeeks: [Count subarrays with given sum](https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/)

### 19. Top K Frequent Elements

**Problem**: Given an integer array and an integer k, return the k most frequent elements.
**Sample Input 1**: `nums = [1,1,1,2,2,3], k = 2`  
**Expected Output 1**: `[1,2]` (1 appears 3 times, 2 appears 2 times)
**Sample Input 2**: `nums = [1], k = 1`  
**Expected Output 2**: `[1]`
**Links:**

- LeetCode: [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- GeeksforGeeks: [Find k numbers with most occurrences in the given array](https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/)

### 20. LRU Cache

**Problem**: Design and implement a data structure for Least Recently Used (LRU) cache.
**Operations**:

- `get(key)` - Get the value if the key exists, otherwise return -1.
- `put(key, value)` - Update or insert the value if the key exists. When the cache reaches its capacity, invalidate the least recently used item before inserting a new item.
  **Links:**
- LeetCode: [146. LRU Cache](https://leetcode.com/problems/lru-cache/)
- GeeksforGeeks: [LRU Cache Implementation](https://www.geeksforgeeks.org/lru-cache-implementation/)

### 21. Valid Sudoku

**Problem**: Determine if a 9x9 Sudoku board is valid.
**Rules**:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.
   **Links:**

- LeetCode: [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
- GeeksforGeeks: [Check if given Sudoku board configuration is valid or not](https://www.geeksforgeeks.org/check-if-given-sudoku-board-configuration-is-valid-or-not/)

### 22. Majority Element

**Problem**: Given an array nums of size n, return the majority element (appears more than ⌊n/2⌋ times).
**Sample Input 1**: `nums = [3,2,3]`  
**Expected Output 1**: `3`
**Sample Input 2**: `nums = [2,2,1,1,1,2,2]`  
**Expected Output 2**: `2`
**Links:**

- LeetCode: [169. Majority Element](https://leetcode.com/problems/majority-element/)
- GeeksforGeeks: [Majority Element](https://www.geeksforgeeks.org/majority-element/)

### 23. Isomorphic Strings

**Problem**: Given two strings s and t, determine if they are isomorphic (characters in s can be replaced to get t while preserving character order).
**Sample Input 1**: `s = "egg", t = "add"`  
**Expected Output 1**: `true` (e->a, g->d)
**Sample Input 2**: `s = "foo", t = "bar"`  
**Expected Output 2**: `false`
**Links:**

- LeetCode: [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)
- GeeksforGeeks: [Check if two given strings are isomorphic to each other](https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/)

### 24. Find All Anagrams in a String

**Problem**: Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
**Sample Input 1**: `s = "cbaebabacd", p = "abc"`  
**Expected Output 1**: `[0,6]` (substring starting at index 0: "cba" and at index 6: "bac")
**Sample Input 2**: `s = "abab", p = "ab"`  
**Expected Output 2**: `[0,1,2]`
**Links:**

- LeetCode: [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- GeeksforGeeks: [Find all anagrams in a string](https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/)

### 25. Longest Consecutive Sequence

**Problem**: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
**Sample Input 1**: `nums = [100,4,200,1,3,2]`  
**Expected Output 1**: `4` (The longest consecutive sequence is [1, 2, 3, 4])
**Sample Input 2**: `nums = [0,3,7,2,5,8,4,6,0,1]`  
**Expected Output 2**: `9` (0-8)
**Links:**

- LeetCode: [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- GeeksforGeeks: [Longest Consecutive Subsequence](https://www.geeksforgeeks.org/longest-consecutive-subsequence/)

### 26. Design HashMap

**Problem**: Design a HashMap without using any built-in hash table libraries.
**Operations**:

- `put(key, value)` - Insert a (key, value) pair.
- `get(key)` - Returns the value to which the key is mapped, or -1 if no mapping for the key.
- `remove(key)` - Removes the mapping for the key.
  **Links:**
- LeetCode: [706. Design HashMap](https://leetcode.com/problems/design-hashmap/)
- GeeksforGeeks: [Implement your own HashMap](https://www.geeksforgeeks.org/implementing-our-own-hash-table-with-separate-chaining-in-java/)

### 27. Four Sum

**Problem**: Given an array of integers and a target, find all unique quadruplets that sum up to the target.
**Sample Input 1**: `nums = [1,0,-1,0,-2,2], target = 0`  
**Expected Output 1**: `[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`
**Sample Input 2**: `nums = [2,2,2,2,2], target = 8`  
**Expected Output 2**: `[[2,2,2,2]]`
**Links:**

- LeetCode: [18. 4Sum](https://leetcode.com/problems/4sum/)
- GeeksforGeeks: [Find four elements that sum to a given value](https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value-set-2/)

### 28. Continuous Subarray Sum

**Problem**: Given an integer array and an integer k, return true if the array has a continuous subarray whose sum equals to k * n where n is a positive integer.
**Sample Input 1**: `nums = [23,2,4,6,7], k = 6`  
**Expected Output 1**: `true` (Because [2, 4] sums to 6, which is 6*1)
**Sample Input 2**: `nums = [23,2,6,4,7], k = 6`  
**Expected Output 2**: `true` (Because [23, 2, 6, 4, 7] sums to 42, which is 6\*7)
**Links:**

- LeetCode: [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
- GeeksforGeeks: [Continuous Subarray Sum](https://www.geeksforgeeks.org/check-subarray-with-given-sum-exists/)

### 29. Longest Substring with At Least K Repeating Characters

**Problem**: Find the longest substring where each character appears at least k times.
**Sample Input 1**: `s = "aaabb", k = 3`  
**Expected Output 1**: `3` (The substring "aaa" has length 3)
**Sample Input 2**: `s = "ababbc", k = 2`  
**Expected Output 2**: `5` (The substring "ababbc" has length 5 with "a" and "b" appearing at least twice)
**Links:**

- LeetCode: [395. Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)
- GeeksforGeeks: [Find longest substring with k unique characters](https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/)

### 30. Maximum Size Subarray Sum Equals k

**Problem**: Given an array nums and a target value k, find the maximum length of a subarray that sums to k.
**Sample Input 1**: `nums = [1,-1,5,-2,3], k = 3`  
**Expected Output 1**: `4` (Because the subarray [1,-1,5,-2] sums to 3 and is the longest)
**Sample Input 2**: `nums = [-2,-1,2,1], k = 1`  
**Expected Output 2**: `2` (The subarray [-1,2] sums to 1 and is the longest)
**Links:**

- LeetCode: [325. Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)
- GeeksforGeeks: [Length of largest subarray with sum divisible by k](https://www.geeksforgeeks.org/length-largest-subarray-sum-divisible-k/)

### 31. Find Duplicate File in System

**Problem**: Given a list of file paths where each path contains a folder path, and a file in that folder, find all the duplicate files and group them together.
**Sample Input**:

```
["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
```

**Expected Output**:

```
[["root/a/1.txt","root/c/3.txt"],["root/a/2.txt","root/c/d/4.txt","root/4.txt"]]
```

**Links:**

- LeetCode: [609. Find Duplicate File in System](https://leetcode.com/problems/find-duplicate-file-in-system/)
- GeeksforGeeks: [Print all files with duplicate content in a directory with subdirectories](https://www.geeksforgeeks.org/print-all-files-with-duplicate-content-in-a-directory-with-subdirectories/)

### 32. Subarray Sum Divisible by K

**Problem**: Given an array of integers nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
**Sample Input 1**: `nums = [4,5,0,-2,-3,1], k = 5`  
**Expected Output 1**: `7` (There are 7 subarrays with a sum divisible by k = 5)
**Sample Input 2**: `nums = [5], k = 9`  
**Expected Output 2**: `0` (There are no subarrays with a sum divisible by k = 9)
**Links:**

- LeetCode: [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
- GeeksforGeeks: [Count of subarrays with sum divisible by k](https://www.geeksforgeeks.org/count-subarrays-with-sum-divisible-by-k/)

### 33. Contiguous Array

**Problem**: Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
**Sample Input 1**: `nums = [0,1]`  
**Expected Output 1**: `2`
**Sample Input 2**: `nums = [0,1,0]`  
**Expected Output 2**: `2`
**Links:**

- LeetCode: [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/)
- GeeksforGeeks: [Largest subarray with equal number of 0s and 1s](https://www.geeksforgeeks.org/largest-subarray-with-equal-number-of-0s-and-1s/)

### 34. Brick Wall

**Problem**: Given a brick wall, find the least number of bricks you must cross to get from the top to the bottom (by drawing a vertical line).
**Sample Input**:

```
[
  [1,2,2,1],
  [3,1,2],
  [1,3,2],
  [2,4],
  [3,1,2],
  [1,3,1,1]
]
```

**Expected Output**: `2` (Drawing a vertical line at x = 2 crosses only 2 bricks)
**Links:**

- LeetCode: [554. Brick Wall](https://leetcode.com/problems/brick-wall/)
- GeeksforGeeks: [Find least number of cuts required to cross a brick wall](https://www.geeksforgeeks.org/find-least-number-of-cuts-required-to-cross-a-brick-wall/)

### 35. Time Based Key-Value Store

**Problem**: Design a time-based key-value data structure that can store and retrieve a key at a timestamp.
**Operations**:

- `set(key, value, timestamp)` - Store the key and value at the given timestamp.
- `get(key, timestamp)` - Return the value for the key at the given timestamp, or "" if no value exists.
  **Links:**
- LeetCode: [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
- GeeksforGeeks: [Design a time-based key-value data structure](https://www.geeksforgeeks.org/design-a-data-structure-that-supports-insert-delete-search-and-get-random-in-constant-time

## 🟡 Medium (36-45)

### 36. Longest Harmonious Subsequence

**Problem**: Find the length of the longest subsequence where the difference between the largest and smallest number is exactly 1.
**Sample Input 1**: `nums = [1,3,2,2,5,2,3,7]`  
**Expected Output 1**: `5` (The harmonious subsequence is [3,2,2,2,3])
**Sample Input 2**: `nums = [1,2,3,4]`  
**Expected Output 2**: `2` (Either [1,2] or [2,3] or [3,4])
**Links:**

- LeetCode: [594. Longest Harmonious Subsequence](https://leetcode.com/problems/longest-harmonious-subsequence/)
- GeeksforGeeks: [Length of the longest harmonious subsequence](https://www.geeksforgeeks.org/length-longest-harmonious-subsequence/)

### 37. Pairs of Songs With Total Durations Divisible by 60

**Problem**: Count pairs of songs where their total duration in seconds is divisible by 60.
**Sample Input 1**: `time = [30,20,150,100,40]`  
**Expected Output 1**: `3` (Pairs: (30,150), (20,100), (20,40))
**Sample Input 2**: `time = [60,60,60]`  
**Expected Output 2**: `3` (All possible pairs: (60,60), (60,60), (60,60))
**Links:**

- LeetCode: [1010. Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)
- GeeksforGeeks: [Count pairs with sum divisible by K](https://www.geeksforgeeks.org/count-pairs-with-sum-divisible-by-k/)

### 38. Replace Words

**Problem**: Replace words in a sentence with their root form if it exists in a given dictionary.
**Sample Input 1**: `dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"`  
**Expected Output 1**: `"the cat was rat by the bat"` (Replace "cattle" with "cat", "rattled" with "rat", and "battery" with "bat")
**Sample Input 2**: `dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"`  
**Expected Output 2**: `"a a b c"` (Replace words with their prefixes)
**Links:**

- LeetCode: [648. Replace Words](https://leetcode.com/problems/replace-words/)
- GeeksforGeeks: [Replace words in a text with their prefix](https://www.geeksforgeeks.org/replace-words-text-prefix/)

### 39. Array of Doubled Pairs

**Problem**: Given an integer array with even length, determine if it can be reordered such that for every i, arr[2*i+1] = 2*arr[2*i].
**Sample Input 1**: `arr = [3,1,3,6]`  
**Expected Output 1**: `false` (Cannot be reordered)
**Sample Input 2**: `arr = [4,-2,2,-4]`  
**Expected Output 2**: `true` (Can be reordered as [-2,-4,2,4] or [2,4,-2,-4])
**Links:**

- LeetCode: [954. Array of Doubled Pairs](https://leetcode.com/problems/array-of-doubled-pairs/)
- GeeksforGeeks: [Check if an array can be divided into pairs whose sum is divisible by k](https://www.geeksforgeeks.org/check-if-an-array-can-be-divided-into-pairs-whose-sum-is-divisible-by-k/)

### 40. Minimum Consecutive Cards to Pick Up

**Problem**: Given an integer array cards, find the minimum number of consecutive cards to pick up to get a pair of matching cards.
**Sample Input 1**: `cards = [3,4,2,3,4,7]`  
**Expected Output 1**: `4` (Pick up cards at indices 0, 1, 2, 3 to get a pair of 3s)
**Sample Input 2**: `cards = [1,0,5,3]`  
**Expected Output 2**: `-1` (Cannot find any matching pairs)
**Links:**

- LeetCode: [2260. Minimum Consecutive Cards to Pick Up](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/)
- GeeksforGeeks: [Minimum distance between two occurrences of same element in array](https://www.geeksforgeeks.org/minimum-distance-between-two-occurrences-of-same-element-in-array/)

### 41. Line Reflection

**Problem**: Given n points on a 2D plane, find if there exists a line of reflection such that for every point (x, y), there exists another point (-x, y) reflected across this line.
**Sample Input 1**: `points = [[1,1],[-1,1]]`  
**Expected Output 1**: `true` (The line of reflection is x=0)
**Sample Input 2**: `points = [[1,1],[-1,-1]]`  
**Expected Output 2**: `false` (No line of reflection)
**Links:**

- LeetCode: [356. Line Reflection](https://leetcode.com/problems/line-reflection/)
- GeeksforGeeks: [Find line of reflection](https://www.geeksforgeeks.org/check-if-the-given-set-of-points-can-be-reflected-across-a-line/)

### 42. Maximum Number of Balloons

**Problem**: Given a string text, return the maximum number of instances of the word "balloon" that can be formed from the characters in text.
**Sample Input 1**: `text = "nlaebolko"`  
**Expected Output 1**: `1` (Can form 1 "balloon")
**Sample Input 2**: `text = "loonbalxballpoon"`  
**Expected Output 2**: `2` (Can form 2 "balloon"s)
**Links:**

- LeetCode: [1189. Maximum Number of Balloons](https://leetcode.com/problems/maximum-number-of-balloons/)
- GeeksforGeeks: [Count maximum occurrences of a word in given string array](https://www.geeksforgeeks.org/count-maximum-occurrences-of-a-word-in-given-string-array/)

### 43. Longest Palindrome by Concatenating Two Letter Words

**Problem**: Given an array of two-letter strings, return the length of the longest palindrome that can be built using these strings.
**Sample Input 1**: `words = ["lc","cl","gg"]`  
**Expected Output 1**: `6` (Can concatenate "cl" + "gg" + "lc" to form a palindrome)
**Sample Input 2**: `words = ["ab","ty","yt","lc","cl","ab"]`  
**Expected Output 2**: `8` (Can concatenate "ty" + "cl" + "lc" + "yt" to form a palindrome)
**Links:**

- LeetCode: [2131. Longest Palindrome by Concatenating Two Letter Words](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/)
- GeeksforGeeks: [Longest palindrome that can be built from array of strings](https://www.geeksforgeeks.org/longest-palindrome-that-can-be-built-from-array-of-strings/)

### 44. Subdomain Visit Count

**Problem**: Count the number of visits to each subdomain in a list of count-paired domains.
**Sample Input 1**: `cpdomains = ["9001 discuss.leetcode.com"]`  
**Expected Output 1**: `["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]`
**Sample Input 2**: `cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]`  
**Expected Output 2**: `["900 google.mail.com", "901 mail.com", "951 com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org", "5 org"]`
**Links:**

- LeetCode: [811. Subdomain Visit Count](https://leetcode.com/problems/subdomain-visit-count/)
- GeeksforGeeks: [Count visits for each subdomain in a list](https://www.geeksforgeeks.org/count-visits-for-each-subdomain-in-a-list/)

### 45. Find Subarrays With Equal Sum

**Problem**: Given an integer array nums, determine if there are two non-overlapping subarrays of length 2 with equal sum.
**Sample Input 1**: `nums = [4,2,4]`  
**Expected Output 1**: `true` (Subarrays [4,2] and [2,4] have the same sum)
**Sample Input 2**: `nums = [1,2,3,4,5]`  
**Expected Output 2**: `false` (No two non-overlapping subarrays of length 2 have the same sum)
**Links:**

- LeetCode: [2395. Find Subarrays With Equal Sum](https://leetcode.com/problems/find-subarrays-with-equal-sum/)
- GeeksforGeeks: [Check if there exist two subarrays of same length with equal sum](https://www.geeksforgeeks.org/check-if-there-exist-two-subarrays-of-same-length-with-equal-sum/)

## 🔴 Hard (46-50)

### 46. Minimum Window Substring

**Problem**: Given two strings s and t, return the minimum window substring of s that contains all characters in t in any order.
**Sample Input 1**: `s = "ADOBECODEBANC", t = "ABC"`  
**Expected Output 1**: `"BANC"` (Minimum window containing all characters from t)
**Sample Input 2**: `s = "a", t = "a"`  
**Expected Output 2**: `"a"` (Minimum window is the character itself)
**Links:**

- LeetCode: [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
- GeeksforGeeks: [Smallest window in a string containing all characters of another string](https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/)

### 47. Longest Duplicate Substring

**Problem**: Given a string s, find the longest duplicate substring.
**Sample Input 1**: `s = "banana"`  
**Expected Output 1**: `"ana"` (The longest duplicate substring is "ana")
**Sample Input 2**: `s = "abcd"`  
**Expected Output 2**: `""` (No duplicate substring)
**Links:**

- LeetCode: [1044. Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
- GeeksforGeeks: [Longest repeated substring problem](https://www.geeksforgeeks.org/longest-repeated-substring-problem/)

### 48. Count of Subarrays With Equal 0s and 1s

**Problem**: Given a binary array nums, return the number of subarrays with an equal number of 0s and 1s.
**Sample Input 1**: `nums = [0,1,0]`  
**Expected Output 1**: `2` (Subarrays [0,1] and [1,0] have an equal number of 0s and 1s)
**Sample Input 2**: `nums = [0,0,0,0,0,0,1,1]`  
**Expected Output 2**: `1` (Only the entire array [0,0,0,0,0,0,1,1] has an equal number of 0s and 1s)
**Links:**

- LeetCode: [930. Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)
- GeeksforGeeks: [Count subarrays with equal number of 1's and 0's](https://www.geeksforgeeks.org/count-subarrays-equal-number-1s-0s/)

### 49. Number of Distinct Islands

**Problem**: Given a 2D grid of 0s and 1s, count the number of distinct islands where an island is a group of connected 1s (4-directionally).
**Sample Input 1**:

```
grid = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,0,1,1],
  [0,0,0,1,1]
]
```

**Expected Output 1**: `1` (The two islands are identical when translated)
**Sample Input 2**:

```
grid = [
  [1,1,0,1,1],
  [1,0,0,0,0],
  [0,0,0,0,1],
  [1,1,0,1,1]
]
```

**Expected Output 2**: `3` (There are three distinct island shapes)
**Links:**

- LeetCode: [694. Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/)
- GeeksforGeeks: [Find the number of distinct islands](https://www.geeksforgeeks.org/find-the-number-of-distinct-islands/)

### 50. Smallest Sufficient Team

**Problem**: Given a list of required skills and a list of people with their skills, find the smallest team that can cover all the required skills.
**Sample Input 1**: `req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]`  
**Expected Output 1**: `[0,2]` (Person 0 has Java skills, person 2 has NodeJS and ReactJS skills)
**Sample Input 2**: `req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]`  
**Expected Output 2**: `[1,2]` (Together they cover all the required skills)
**Links:**

- LeetCode: [1125. Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
- GeeksforGeeks: [Minimum number of people to cover all skills](https://www.geeksforgeeks.org/minimum-number-of-people-to-cover-all-skills/)

## notes

https://leetcode.com/problems/contiguous-array/description/
https://leetcode.com/problems/subarray-sum-equals-k/description/
https://leetcode.com/problems/subarrays-with-k-different-integers/description/
https://leetcode.com/problems/count-number-of-nice-subarrays/description/
https://leetcode.com/problems/binary-subarrays-with-sum/description/
https://leetcode.com/problems/subarray-product-less-than-k/description/
https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
