# Reverse String

## Problem Statement
Write a function that reverses a string. The input string is given as an array of characters `s`.

## Intuition
The goal is to reverse the order of characters in the given string. A common approach is to use two pointers, one starting from the beginning of the string and the other from the end, and swap the characters at these positions until the pointers meet in the middle.

## Approach
1. Initialize two pointers `l` and `r`, where `l` points to the start of the string and `r` points to the end of the string.
2. Swap the characters at positions `l` and `r`.
3. Increment `l` and decrement `r`.
4. Repeat steps 2-3 until `l` is greater than or equal to `r`.
5. The string is now reversed in-place.

## Explanation
The provided code implements the approach described above. It uses two pointers to traverse the string from both ends and swaps the characters at those positions. This process continues until the pointers meet in the middle, effectively reversing the string in-place.

## Code

```python

def reverseString(s: List[str]) -> None:
    l = 0
    r = len(s) - 1
    
    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1

```

## Time and Space Complexities Analysis
- Time Complexity: O(N), where N is the length of the input string s. The algorithm iterates through half of the string.
- Space Complexity: O(1). The algorithm uses a constant amount of extra space regardless of the input size, as the reversal is done in-place.
