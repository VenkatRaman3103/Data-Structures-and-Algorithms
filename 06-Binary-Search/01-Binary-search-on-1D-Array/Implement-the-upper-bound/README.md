# Upper Bound Implementation

## Intuition
The upper bound is a concept used in binary search algorithms to find the smallest element in a sorted array that is greater than a given target value. It helps in efficiently locating the insertion point of an element into a sorted array.

## Approach
The upper bound implementation involves using binary search to find the smallest element in the array that is greater than the target value. This is achieved by narrowing down the search space iteratively until the upper bound is found.

## Explanation
1. Sort the input array `arr`.
2. Initialize two pointers, `start` and `end`, to mark the beginning and end of the search range, respectively.
3. While `start` is less than `end`, perform the following steps:
    - Calculate the middle index `mid` of the current search range.
    - If the element at index `mid` is greater than the target value `x`, update the `end` pointer to `mid - 1`.
    - If the element at index `mid` is less than the target value `x`, update the `start` pointer to `mid + 1`.
    - If the element at index `mid` is equal to the target value `x`, update the `start` pointer to `mid + 1`.
4. Return the element at the `start` index if it exists, otherwise return -1, indicating that no upper bound exists.

## Code
```python


def implementUpperBound(arr, n, x):
    arr.sort()

    start = 0
    end = n - 1

    while start < end:
        mid = (start + end ) // 2

        if arr[mid] > x:
            return arr[mid]
        elif arr[mid] < x:
            start = mid + 1
        elif x < arr[mid]:
            end = mid - 1

    return -1

```

# Time and Space Complexities Analysis
- Time Complexity: The time complexity of the upper bound implementation using binary search is O(log n) because at each step, the search space is halved.
- Space Complexity: The space complexity is O(1) since the algorithm utilizes a constant amount of extra space regardless of the size of the input array.