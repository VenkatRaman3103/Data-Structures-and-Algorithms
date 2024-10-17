# Searching Range in Sorted Array

## Description:
This repository contains Python solutions for finding the range of indices in a sorted array where a target element appears. Three different approaches are implemented: brute force, a better solution using binary search, and an optimal solution using an optimized binary search.

## Approach and Explanation:

### 1. Brute Force:
The brute force approach iterates through the array and finds the first and last occurrences of the target element, updating the indices accordingly. This approach has a time complexity of O(n) as it scans the entire array.

```python

# Brute Force
def searchRange(nums, target):
    first = -1
    last = -1
    for i in range(len(nums)):
        if nums[i] == target:
            if first == -1:
                first = i
            last = i
    return [first, last]

```

### 2. Better Solution:
This approach improves the time complexity to O(log n) by using binary search to find the first and last occurrences of the target element separately. It first finds the first occurrence using a modified binary search and then finds the last occurrence in a similar way.

```python

def firstOccurrence(nums, target):
    start = 0
    end = len(nums) - 1
    ans = -1
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            ans = mid
            end = mid - 1
        elif nums[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return ans

def lastOccurrence(nums, target):
    start = 0
    end = len(nums) - 1
    ans = -1
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            ans = mid
            start = mid + 1
        elif nums[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return ans

def searchRange(nums: List[int], target: int) -> List[int]:
    first = firstOccurrence(nums, target)
    last = lastOccurrence(nums, target)
    return [first, last]


```

### 3. Optimal Solution:
The optimal solution further optimizes the binary search approach by combining the search for the first and last occurrences into a single binary search function. It adjusts the search window based on whether it's finding the first occurrence or the last occurrence of the target element.

```python


class Solution:
    def searchingAlgoBin(self, nums, target, first):
        start = 0
        end = len(nums) - 1
        ans = -1
        while start <= end:
            mid = (start + end) // 2 
            if target < nums[mid]:
                end =  mid - 1
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
        first =  self.searchingAlgoBin(nums, target, first=True)
        last = self.searchingAlgoBin(nums, target, first=False)
        if first == -1:
            return [-1, -1]
        return [first, last]


```

## Time and Space Complexities Analysis:

### Brute Force:
- Time Complexity: O(n)
- Space Complexity: O(1)

### Better Solution:
- Time Complexity: O(log n)
- Space Complexity: O(1)

### Optimal Solution:
- Time Complexity: O(log n)
- Space Complexity: O(1)
