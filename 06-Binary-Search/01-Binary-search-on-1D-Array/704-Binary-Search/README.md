# Binary Search

## Intuition
Binary Search is an efficient algorithm for finding a target value within a sorted array. It works by repeatedly dividing the search space in half. This algorithm has a time complexity of O(log n), making it significantly faster than linear search for large datasets.

## Approach
The provided code implements Binary Search using both an iterative and a recursive approach. The main idea is to maintain two pointers, 'start' and 'end', defining the search space. The algorithm calculates the middle index and compares the element at that index with the target value. Based on the comparison, the search space is narrowed down until the target is found or the search space is empty.

## Explanation
- **Iterative Approach:**
  - Initialize 'start' and 'end' pointers.
  - Use a while loop to repeatedly divide the search space.
  - Update 'start' or 'end' based on the comparison of the middle element with the target.
  - Return the index if the target is found; otherwise, return -1.

- **Recursive Approach:**
  - Define a recursive function that takes 'start' and 'end' pointers as arguments.
  - Base case checks if 'start' is greater than 'end', returning -1.
  - Calculate the middle index and compare the element at that index with the target.
  - Recursively call the function on the narrowed down search space.
  - Return the index if the target is found; otherwise, return -1.

## Code

```python
# Iterative Approach
def search(nums: List[int], target: int) -> int:
    n = len(nums)
    start, end = 0, n - 1

    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            return mid
        elif target < nums[mid]:
            end = mid - 1
        elif nums[mid] < target:
            start = mid + 1
    return -1
```

```python

# Recursive Approach
class Solution:
    def binarySearch(self, nums, start, end, target):
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

```


# Time and Space Complexities Analysis

## Time Complexity: O(log n)

- Both the iterative and recursive approaches halve the search space in each step, resulting in a logarithmic time complexity.

## Space Complexity: O(1) (iterative) / O(log n) (recursive)

- The iterative approach uses constant space.
- The recursive approach has a space complexity of O(log n) due to the function call stack.
