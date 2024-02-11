from typing import *

def reverseArray(n: int, nums: List[int]) -> List[int]:
    reverseList = []

    if n == 0:
        return nums[0]
    else:
        reverseArray(n-1, nums)

    reverseList = [nums[n-1]] + reverseList

    return reverseList