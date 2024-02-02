# Merge Strings Alternately

## Problem Statement

You are given two strings, `word1` and `word2`. The task is to merge the strings by adding letters in alternating order, starting with `word1`. If one string is longer than the other, append the additional letters onto the end of the merged string.

## Intuition

To merge two strings alternately, we can iterate through both strings simultaneously, adding one character from each string alternately. If one string is longer than the other, we append the remaining characters to the end of the merged string.

## Approach

1. Initialize two pointers, `l` and `r`, to track the current position in both strings.
2. Create an empty array, `arr`, to store the merged characters.
3. Iterate through both strings using the pointers:
   - Append the character at `word1[l]` to `arr`.
   - Append the character at `word2[r]` to `arr`.
   - Increment both pointers `l` and `r`.
4. After the loop, append the remaining characters from both strings to `arr`.
5. Join the characters in `arr` to form the final merged string.
6. Return the merged string.

## Code

```python

def mergeAlternately(word1: str, word2: str) -> str:
    l = 0
    r = 0 
    arr = []

    while l < len(word1) and r < len(word2):
        arr.append(word1[l])
        arr.append(word2[r])
        l += 1
        r += 1

    arr.append(word1[l:])
    arr.append(word2[r:])

    return ''.join(arr)

```

## Complexities Analysis

- Time Complexity: O(max(N, M)), where N and M are the lengths of word1 and word2 respectively. The algorithm iterates through both strings once.
- Space Complexity: O(N + M), where N and M are the lengths of word1 and word2 respectively. The additional space is used to store the merged characters in the list.