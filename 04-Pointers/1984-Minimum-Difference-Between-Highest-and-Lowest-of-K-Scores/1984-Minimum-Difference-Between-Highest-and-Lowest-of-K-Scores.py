from typing import *

def minimumDifference(nums: List[int], k: int) -> int:
    nums.sort()

    l = 0
    r = k - 1

    minimum_value = float('inf')

    while l < r:
        difference = nums[l] - nums[r]

        minimum_value = min(minimum_value, difference)
    
    return minimum_value

