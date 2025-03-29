from typing import *

def reverse(x: int) -> int:
    INT_MAX = 2 ** 31 -1
    INT_MIN = - 2 ** 31

    sign = 1

    if x < 0:
        sign  = -1
    
    x = abs(x)

    revNum = 0

    while x != 0:

        lastNum = x % 10

        revNum = (revNum * 10) + lastNum

        x //= 10

    if revNum > INT_MAX or revNum < INT_MIN:
        return 0

    return revNum * sign