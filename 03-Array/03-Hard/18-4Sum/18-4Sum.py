from typing import *

def fourSum(nums: List[int], target: int) -> List[List[int]]:
    n = len(nums)

    nums.sort()

    answer = []

    for i in range(n):
        if i != 0 and nums[i - 1] == nums[i]:
            continue

        for j in range(i + 1, n):

            if  j > i+ 1 and nums[j - 1] == nums[j]:
                continue

            k = j + 1
            l = n - 1

            while k < l:

                summation = nums[i] + nums[j] + nums[k] + nums[l]

                print(summation)
                if summation == target:
                    temp_arr = [nums[i], nums[j], nums[k], nums[l]]

                    answer.append(temp_arr)

                    k += 1
                    l -= 1

                    
                    while k < l and nums[k - 1] == nums[k]:
                        k += 1

                    while k < l and nums[l] == nums[l + 1]:
                        l -= 1

                if summation < target:
                    k += 1

                if summation > target:
                    l -= 1


    return answer