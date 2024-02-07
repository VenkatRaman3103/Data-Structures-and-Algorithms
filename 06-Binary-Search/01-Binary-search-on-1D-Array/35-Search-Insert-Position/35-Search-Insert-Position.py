from typing import *

def searchInsert(nums: List[int], target: int) -> int:

    start = 0
    end = len(nums) - 1

    while start < end:

        mid = (start + end ) // 2

        if nums[mid] == target:
            return mid
        
        elif target < nums[mid] :
            end = mid - 1

        elif nums[mid] < target :
            start  =  mid + 1

    return -1
