# String Problems Practice List

## 🟢 Easy (1-20)

### 1. Valid Palindrome

**Problem**: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.  
**Sample Input 1**: `s = "A man, a plan, a canal: Panama"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s = "race a car"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

### 2. Valid Anagram

**Problem**: Given two strings s and t, return true if t is an anagram of s, and false otherwise.  
**Sample Input 1**: `s = "anagram", t = "nagaram"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s = "rat", t = "car"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

### 3. First Unique Character in a String

**Problem**: Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.  
**Sample Input 1**: `s = "leetcode"`  
**Expected Output 1**: `0`  
**Sample Input 2**: `s = "loveleetcode"`  
**Expected Output 2**: `2`  
**Links**: LeetCode: [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

### 4. Reverse String

**Problem**: Write a function that reverses a string. The input string is given as an array of characters s.  
**Sample Input 1**: `s = ["h","e","l","l","o"]`  
**Expected Output 1**: `["o","l","l","e","h"]`  
**Sample Input 2**: `s = ["H","a","n","n","a","h"]`  
**Expected Output 2**: `["h","a","n","n","a","H"]`  
**Links**: LeetCode: [344. Reverse String](https://leetcode.com/problems/reverse-string/)

### 5. Implement strStr()

**Problem**: Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.  
**Sample Input 1**: `haystack = "hello", needle = "ll"`  
**Expected Output 1**: `2`  
**Sample Input 2**: `haystack = "aaaaa", needle = "bba"`  
**Expected Output 2**: `-1`  
**Links**: LeetCode: [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

### 6. Length of Last Word

**Problem**: Given a string s consisting of words and spaces, return the length of the last word in the string.  
**Sample Input 1**: `s = "Hello World"`  
**Expected Output 1**: `5`  
**Sample Input 2**: `s = "   fly me   to   the moon  "`  
**Expected Output 2**: `4`  
**Links**: LeetCode: [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/)

### 7. Roman to Integer

**Problem**: Given a roman numeral, convert it to an integer.  
**Sample Input 1**: `s = "III"`  
**Expected Output 1**: `3`  
**Sample Input 2**: `s = "LVIII"`  
**Expected Output 2**: `58`  
**Links**: LeetCode: [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

### 8. Longest Common Prefix

**Problem**: Write a function to find the longest common prefix string amongst an array of strings.  
**Sample Input 1**: `strs = ["flower","flow","flight"]`  
**Expected Output 1**: `"fl"`  
**Sample Input 2**: `strs = ["dog","racecar","car"]`  
**Expected Output 2**: `""`  
**Links**: LeetCode: [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

### 9. Add Binary

**Problem**: Given two binary strings a and b, return their sum as a binary string.  
**Sample Input 1**: `a = "11", b = "1"`  
**Expected Output 1**: `"100"`  
**Sample Input 2**: `a = "1010", b = "1011"`  
**Expected Output 2**: `"10101"`  
**Links**: LeetCode: [67. Add Binary](https://leetcode.com/problems/add-binary/)

### 10. Plus One

**Problem**: You are given a large integer represented as an integer array digits. Increment the large integer by one and return the resulting array.  
**Sample Input 1**: `digits = [1,2,3]`  
**Expected Output 1**: `[1,2,4]`  
**Sample Input 2**: `digits = [9]`  
**Expected Output 2**: `[1,0]`  
**Links**: LeetCode: [66. Plus One](https://leetcode.com/problems/plus-one/)

### 11. Count and Say

**Problem**: The count-and-say sequence is a sequence of digit strings defined by the recursive formula.  
**Sample Input 1**: `n = 1`  
**Expected Output 1**: `"1"`  
**Sample Input 2**: `n = 4`  
**Expected Output 2**: `"1211"`  
**Links**: LeetCode: [38. Count and Say](https://leetcode.com/problems/count-and-say/)

### 12. String to Integer (atoi)

**Problem**: Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.  
**Sample Input 1**: `s = "42"`  
**Expected Output 1**: `42`  
**Sample Input 2**: `s = "   -42"`  
**Expected Output 2**: `-42`  
**Links**: LeetCode: [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/)

### 13. Excel Sheet Column Title

**Problem**: Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.  
**Sample Input 1**: `columnNumber = 1`  
**Expected Output 1**: `"A"`  
**Sample Input 2**: `columnNumber = 28`  
**Expected Output 2**: `"AB"`  
**Links**: LeetCode: [168. Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)

### 14. Reverse Words in a String III

**Problem**: Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace.  
**Sample Input 1**: `s = "Let's take LeetCode contest"`  
**Expected Output 1**: `"s'teL ekat edoCteeL tsetnoc"`  
**Sample Input 2**: `s = "God Ding"`  
**Expected Output 2**: `"doG gniD"`  
**Links**: LeetCode: [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

### 15. Detect Capital

**Problem**: We define the usage of capitals in a word to be right when one of the following cases holds.  
**Sample Input 1**: `word = "USA"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `word = "FlaG"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [520. Detect Capital](https://leetcode.com/problems/detect-capital/)

### 16. Student Attendance Record I

**Problem**: You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present.  
**Sample Input 1**: `s = "PPALLP"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s = "PPALLL"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [551. Student Attendance Record I](https://leetcode.com/problems/student-attendance-record-i/)

### 17. Number of Segments in a String

**Problem**: Given a string s, return the number of segments in the string.  
**Sample Input 1**: `s = "Hello, my name is John"`  
**Expected Output 1**: `5`  
**Sample Input 2**: `s = "Hello"`  
**Expected Output 2**: `1`  
**Links**: LeetCode: [434. Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string/)

### 18. Repeated Substring Pattern

**Problem**: Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.  
**Sample Input 1**: `s = "abab"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s = "aba"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)

### 19. License Key Formatting

**Problem**: You are given a license key represented as a string s that consists of only alphanumeric characters and dashes.  
**Sample Input 1**: `s = "5F3Z-2e-9-w", k = 4`  
**Expected Output 1**: `"5F3Z-2E9W"`  
**Sample Input 2**: `s = "2-5g-3-J", k = 2`  
**Expected Output 2**: `"2-5G-3J"`  
**Links**: LeetCode: [482. License Key Formatting](https://leetcode.com/problems/license-key-formatting/)

### 20. Keyboard Row

**Problem**: Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard.  
**Sample Input 1**: `words = ["Hello","Alaska","Dad","Peace"]`  
**Expected Output 1**: `["Alaska","Dad"]`  
**Sample Input 2**: `words = ["omk"]`  
**Expected Output 2**: `[]`  
**Links**: LeetCode: [500. Keyboard Row](https://leetcode.com/problems/keyboard-row/)

## 🟡 Medium (21-35)

### 21. Longest Substring Without Repeating Characters

**Problem**: Given a string s, find the length of the longest substring without repeating characters.  
**Sample Input 1**: `s = "abcabcbb"`  
**Expected Output 1**: `3`  
**Sample Input 2**: `s = "bbbbb"`  
**Expected Output 2**: `1`  
**Links**: LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### 22. Longest Palindromic Substring

**Problem**: Given a string s, return the longest palindromic substring in s.  
**Sample Input 1**: `s = "babad"`  
**Expected Output 1**: `"bab"` or `"aba"`  
**Sample Input 2**: `s = "cbbd"`  
**Expected Output 2**: `"bb"`  
**Links**: LeetCode: [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

### 23. Group Anagrams

**Problem**: Given an array of strings strs, group the anagrams together. You can return the answer in any order.  
**Sample Input 1**: `strs = ["eat","tea","tan","ate","nat","bat"]`  
**Expected Output 1**: `[["bat"],["nat","tan"],["ate","eat","tea"]]`  
**Sample Input 2**: `strs = [""]`  
**Expected Output 2**: `[[""]]`  
**Links**: LeetCode: [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

### 24. Generate Parentheses

**Problem**: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.  
**Sample Input 1**: `n = 3`  
**Expected Output 1**: `["((()))","(()())","(())()","()(())","()()()"]`  
**Sample Input 2**: `n = 1`  
**Expected Output 2**: `["()"]`  
**Links**: LeetCode: [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

### 25. Letter Combinations of a Phone Number

**Problem**: Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.  
**Sample Input 1**: `digits = "23"`  
**Expected Output 1**: `["ad","ae","af","bd","be","bf","cd","ce","cf"]`  
**Sample Input 2**: `digits = ""`  
**Expected Output 2**: `[]`  
**Links**: LeetCode: [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

### 26. Valid Parentheses

**Problem**: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.  
**Sample Input 1**: `s = "()"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s = "([)]"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

### 27. Multiply Strings

**Problem**: Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.  
**Sample Input 1**: `num1 = "2", num2 = "3"`  
**Expected Output 1**: `"6"`  
**Sample Input 2**: `num1 = "123", num2 = "456"`  
**Expected Output 2**: `"56088"`  
**Links**: LeetCode: [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/)

### 28. Integer to Roman

**Problem**: Given an integer, convert it to a roman numeral.  
**Sample Input 1**: `num = 3`  
**Expected Output 1**: `"III"`  
**Sample Input 2**: `num = 58`  
**Expected Output 2**: `"LVIII"`  
**Links**: LeetCode: [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/)

### 29. ZigZag Conversion

**Problem**: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows.  
**Sample Input 1**: `s = "PAYPALISHIRING", numRows = 3`  
**Expected Output 1**: `"PAHNAPLSIIGYIR"`  
**Sample Input 2**: `s = "PAYPALISHIRING", numRows = 4`  
**Expected Output 2**: `"PINALSIGYAHRPI"`  
**Links**: LeetCode: [6. Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/)

### 30. Minimum Window Substring

**Problem**: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t is included.  
**Sample Input 1**: `s = "ADOBECODEBANC", t = "ABC"`  
**Expected Output 1**: `"BANC"`  
**Sample Input 2**: `s = "a", t = "a"`  
**Expected Output 2**: `"a"`  
**Links**: LeetCode: [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

### 31. Decode Ways

**Problem**: A message containing letters from A-Z can be encoded into numbers using the mapping A -> 1, B -> 2, ..., Z -> 26.  
**Sample Input 1**: `s = "12"`  
**Expected Output 1**: `2`  
**Sample Input 2**: `s = "226"`  
**Expected Output 2**: `3`  
**Links**: LeetCode: [91. Decode Ways](https://leetcode.com/problems/decode-ways/)

### 32. Restore IP Addresses

**Problem**: A valid IP address consists of exactly four integers separated by single dots. Given a string s containing only digits, return all possible valid IP addresses.  
**Sample Input 1**: `s = "25525511135"`  
**Expected Output 1**: `["255.255.11.135","255.255.111.35"]`  
**Sample Input 2**: `s = "0000"`  
**Expected Output 2**: `["0.0.0.0"]`  
**Links**: LeetCode: [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)

### 33. Compare Version Numbers

**Problem**: Given two version numbers, version1 and version2, compare them.  
**Sample Input 1**: `version1 = "1.01", version2 = "1.001"`  
**Expected Output 1**: `0`  
**Sample Input 2**: `version1 = "1.0", version2 = "1.0.0"`  
**Expected Output 2**: `0`  
**Links**: LeetCode: [165. Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/)

### 34. Fraction to Recurring Decimal

**Problem**: Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.  
**Sample Input 1**: `numerator = 1, denominator = 2`  
**Expected Output 1**: `"0.5"`  
**Sample Input 2**: `numerator = 2, denominator = 1`  
**Expected Output 2**: `"2"`  
**Links**: LeetCode: [166. Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/)

### 35. One Edit Distance

**Problem**: Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.  
**Sample Input 1**: `s = "ab", t = "acb"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s = "", t = ""`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [161. One Edit Distance](https://leetcode.com/problems/one-edit-distance/) (Premium)

## 🔴 Hard (36-50)

### 36. Edit Distance

**Problem**: Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.  
**Sample Input 1**: `word1 = "horse", word2 = "ros"`  
**Expected Output 1**: `3`  
**Sample Input 2**: `word1 = "intention", word2 = "execution"`  
**Expected Output 2**: `5`  
**Links**: LeetCode: [72. Edit Distance](https://leetcode.com/problems/edit-distance/)

### 37. Scramble String

**Problem**: We can scramble a string s to get a string t using the algorithm described.  
**Sample Input 1**: `s1 = "great", s2 = "rgeat"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s1 = "abcdef", s2 = "fecabd"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [87. Scramble String](https://leetcode.com/problems/scramble-string/)

### 38. Interleaving String

**Problem**: Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.  
**Sample Input 1**: `s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"`  
**Expected Output 1**: `true`  
**Sample Input 2**: `s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"`  
**Expected Output 2**: `false`  
**Links**: LeetCode: [97. Interleaving String](https://leetcode.com/problems/interleaving-string/)

### 39. Distinct Subsequences

**Problem**: Given two strings s and t, return the number of distinct subsequences of s which equals t.  
**Sample Input 1**: `s = "rabbbit", t = "rabbit"`  
**Expected Output 1**: `3`  
**Sample Input 2**: `s = "babgbag", t = "bag"`  
**Expected Output 2**: `5`  
**Links**: LeetCode: [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)

### 40. Regular Expression Matching

**Problem**: Given an input string s and a pattern p, implement regular expression matching with support for '.' and '_'.  
**Sample Input 1**: `s = "aa", p = "a"`  
**Expected Output 1**: `false`  
**Sample Input 2**: `s = "aa", p = "a_"` 
**Expected Output 2**:`true`  
**Links**: LeetCode: [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

### 41. Wildcard Pattern Matching

**Problem**: Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '_'.  
**Sample Input 1**: `s = "aa", p = "a"`  
**Expected Output 1**: `false`  
**Sample Input 2**: `s = "aa", p = "_"` 
**Expected Output 2**:`true`  
**Links**: LeetCode: [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

### 42. Palindrome Partitioning II

**Problem**: Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed.  
**Sample Input 1**: `s = "aab"`  
**Expected Output 1**: `1`  
**Sample Input 2**: `s = "raceacar"`  
**Expected Output 2**: `0`  
**Links**: LeetCode: [132. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)

### 43. Word Break II

**Problem**: Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word.  
**Sample Input 1**: `s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]`  
**Expected Output 1**: `["cats and dog","cat sand dog"]`  
**Sample Input 2**: `s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]`  
**Expected Output 2**: `["pine apple pen apple","pineapple pen apple","pine applepen apple"]`  
**Links**: LeetCode: [140. Word Break II](https://leetcode.com/problems/word-break-ii/)

### 44. Longest Valid Parentheses

**Problem**: Given a string containing just the characters '(' and ')', return the length of the longest valid parentheses substring.  
**Sample Input 1**: `s = "(()"`  
**Expected Output 1**: `2`  
**Sample Input 2**: `s = ")()())"`  
**Expected Output 2**: `4`  
**Links**: LeetCode: [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)

### 45. Text Justification

**Problem**: Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters.  
**Sample Input 1**: `words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16`  
**Expected Output 1**: `["This    is    an","example  of text","justification.  "]`  
**Sample Input 2**: `words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16`  
**Expected Output 2**: `["What   must   be","acknowledgment  ","shall be        "]`  
**Links**: LeetCode: [68. Text Justification](https://leetcode.com/problems/text-justification/)

### 46. Basic Calculator

**Problem**: Given a string s representing a valid expression, implement a basic calculator to evaluate it.  
**Sample Input 1**: `s = "1 + 1"`  
**Expected Output 1**: `2`  
**Sample Input 2**: `s = " 2-1 + 2 "`  
**Expected Output 2**: `3`  
**Links**: LeetCode: [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/)

### 47. Remove Invalid Parentheses

**Problem**: Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.  
**Sample Input 1**: `s = "()())()"`  
**Expected Output 1**: `["(())()","()()()"]`  
**Sample Input 2**: `s = "(v)())()"`  
**Expected Output 2**: `["(v())()","(v)()()"]`  
**Links**: LeetCode: [301. Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)

### 48. Word Ladder II

**Problem**: A transformation sequence from word beginWord to word endWord is a sequence of words such that adjacent words differ by exactly one letter.  
**Sample Input 1**: `beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]`  
**Expected Output 1**: `[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]`  
**Sample Input 2**: `beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]`  
**Expected Output 2**: `[]`  
**Links**: LeetCode: [126. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

### 49. Substring with Concatenation of All Words

**Problem**: You are given a string s and an array of strings words. All the strings of words are of the same length.  
**Sample Input 1**: `s = "barfoothefoobarman", words = ["foo","bar"]`  
**Expected Output 1**: `[0,9]`  
**Sample Input 2**: `s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]`  
**Expected Output 2**: `[]`  
**Links**: LeetCode: [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

### 50. Shortest Palindrome

**Problem**: You are given a string s. You can convert s to a palindrome by adding characters in front of it.  
**Sample Input 1**: `s = "aacecaaa"`  
**Expected Output 1**: `"aaacecaaa"`  
**Sample Input 2**: `s = "abcd"`  
**Expected Output 2**: `"dcbabcd"`  
**Links**: LeetCode: [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
