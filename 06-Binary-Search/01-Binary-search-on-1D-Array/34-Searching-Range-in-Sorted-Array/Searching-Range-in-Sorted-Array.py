from typing import *


class Solution:
    def searchingAlgoBin(self, nums, target, first):
        start = 0
        end = len(nums) - 1
        ans = -1
        while start <= end:
            mid = (start + end) // 2
            if target < nums[mid]:
                end = mid - 1
            elif nums[mid] < target:
                start = mid + 1
            elif nums[mid] == target:
                ans = mid
                if first:
                    end = mid - 1
                else:
                    start = mid + 1
        return ans

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        first = self.searchingAlgoBin(nums, target, first=True)
        last = self.searchingAlgoBin(nums, target, first=False)
        if first == -1:
            return [-1, -1]
        return [first, last]
