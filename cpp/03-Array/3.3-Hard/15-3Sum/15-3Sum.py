from typing import *

def threeSum(nums: List[int]) -> List[List[int]]:
    n = len(nums)
    nums.sort()

    result = []

    for i in range(n):

        if i != 0 and nums[i] == nums[i - 1]:
            continue

        j = i + 1
        k = n - 1

        while j < k:
            summation = nums[i] + nums[j] + nums[k]
            if summation == 0:
                arr_sort = [nums[i], nums[j], nums[k]]
                result.append(arr_sort)

                k -= 1
                j += 1

                while j < k and nums[j] == nums[j - 1]:
                    j += 1
                while j < k and nums[k] == nums[k + 1]:
                    k -= 1

            if summation > 0:
                k -= 1
            elif summation < 0:
                j += 1

    return result