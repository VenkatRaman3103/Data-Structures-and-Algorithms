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