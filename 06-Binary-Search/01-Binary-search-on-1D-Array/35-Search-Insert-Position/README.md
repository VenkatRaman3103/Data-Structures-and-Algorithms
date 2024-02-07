# Search Insert Position

## Intuition
The problem asks to find the position where a given target should be inserted in a sorted array, maintaining the sorted order. If the target is already present in the array, the function should return its index. Otherwise, it should return the index where the target would be inserted.

## Approach
The approach involves utilizing binary search to efficiently find the position where the target should be inserted while maintaining the sorted order of the array.

## Explanation
1. Initialize two pointers, `start` and `end`, to mark the beginning and end of the search range, respectively.
2. While `start` is less than or equal to `end`, perform the following steps:
    - Calculate the middle index `mid` of the current search range.
    - If the element at index `mid` is equal to the target value, return `mid`.
    - If the target is less than the element at index `mid`, update the `end` pointer to `mid - 1`.
    - If the target is greater than the element at index `mid`, update the `start` pointer to `mid + 1`.
3. If the target is not found in the array, return the `start` index, which represents the position where the target should be inserted while maintaining the sorted order.

## Code

```python


def searchInsert(nums: List[int], target: int) -> int:
    start = 0
    end = len(nums) - 1

    while start <= end:
        mid = (start + end) // 2

        if nums[mid] == target:
            return mid
        elif target < nums[mid]:
            end = mid - 1
        elif nums[mid] < target:
            start = mid + 1

    return start

```

# Time and Space Complexities Analysis
- Time Complexity: The time complexity of the search insert position function using binary search is O(log n) because at each step, the search space is halved.
- Space Complexity: The space complexity is O(1) since the algorithm utilizes a constant amount of extra space regardless of the size of the input array.