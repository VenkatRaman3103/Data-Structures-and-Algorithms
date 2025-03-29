from typing import *

class Solution:
    def binarySearch(self, nums, start, end, target):

        # base case
        if start > end:
            return -1

        mid = (start + end) // 2

        if nums[mid] == target:
            return mid
        elif target < nums[mid]:
            return self.binarySearch(nums, start, mid - 1, target)

        elif nums[mid] < target:
            return self.binarySearch(nums, mid + 1, end, target)


    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)

        return self.binarySearch(nums, 0, n - 1, target)
