# Palindrome String Check

## Intuition
The aim of this code is to determine whether a given string is a palindrome or not. A palindrome is a string that reads the same forwards and backwards after removing all non-alphanumeric characters and ignoring cases. The intuition behind this solution is to clean the input string by removing non-alphanumeric characters and converting all characters to lowercase. After cleaning the string, a simple two-pointer approach is employed to check whether the cleaned string is a palindrome.

## Approach
1. Define a method `cleanString(self, s)` to clean the input string by removing all non-alphanumeric characters and converting all characters to lowercase.
2. Define a method `isPalindrome(self, s: str) -> bool` to check whether the cleaned string is a palindrome.
3. Clean the input string `s` using the `cleanString` method.
4. Initialize two pointers, `left` and `right`, at the beginning and end of the cleaned string, respectively.
5. Iterate through the cleaned string using the two-pointer approach:
   - If the characters at positions `left` and `right` are the same, move the pointers towards the center.
   - If the characters are different, return `False` as the string is not a palindrome.
6. If the loop completes without finding any mismatch, return `True` as the string is a palindrome.

## Code
```python

from typing import *

class Solution:
    def cleanString(self, s):
        string = ''

        for char in s:
            if char.isalpha() or char.isdigit():
                string += char.lower()

        return string

    def isPalindrome(self, s: str) -> bool:
        
        string = self.cleanString(s)

        left = 0 
        right = len(string) - 1

        while left < right:
            if string[left] == string[right]:
                left += 1
                right -= 1
            else:
                return False
    
        return True

```

## Complexity Analysis
- Time Complexity: The time complexity of this approach is O(n), where n is the length of the input string `s`. Cleaning the string takes O(n) time, and the two-pointer approach takes O(n/2) time in the worst case, resulting in a total time complexity of O(n).
- Space Complexity: The space complexity is O(1) since we are not using any extra space that grows with the input size.

