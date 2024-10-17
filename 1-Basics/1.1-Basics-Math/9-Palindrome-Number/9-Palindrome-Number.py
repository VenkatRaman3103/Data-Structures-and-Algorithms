from typing import *

def isPalindrome(x: int) -> bool:
    if x < 0:
        return False
    
    rev_num = 0

    given_num = x

    while x != 0:
        last_num = x % 10

        rev_num = rev_num * 10 + last_num

        x //= 10

    return given_num == rev_num