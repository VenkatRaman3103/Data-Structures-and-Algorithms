from typing import *

def isPalindrome(s: str) -> bool:

    string = ''

    for char in s:
        if char.isalpha() or char.isdigit():
            string += char.lower()

    return string == string[::-1]