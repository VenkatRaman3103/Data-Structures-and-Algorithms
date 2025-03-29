from typing import *

def majorityElement(nums: List[int]) -> List[int]:
    n = len(nums)


    result = []

    hash_nums = {}

    for i in range(n):
        element = nums[i]

        if element not in hash_nums:
            hash_nums[element] = 1
        else:
            hash_nums[element] += 1

    for key, value in hash_nums.items():
        if value > n/3:
            result.append(key)

    return result