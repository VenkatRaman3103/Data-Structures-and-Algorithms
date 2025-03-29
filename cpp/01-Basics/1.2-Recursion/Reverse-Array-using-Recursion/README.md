# Reverse an Array

## Intuition
The purpose of this code is to reverse the elements of a given array. The intuition behind this function is to utilize a recursive approach to reverse the array.

## Approach
1. Define a method `reverseArray(n: int, nums: List[int]) -> List[int]` to reverse the elements of a given array `nums`.
2. Initialize an empty list `reverseList` to store the reversed elements.
3. Check if the length of the array `nums` is 0. If so, return the same array.
4. Otherwise, recursively call the `reverseArray` function with `n-1` and `nums`.
5. Once the base case is reached (i.e., when `n` becomes 0), start building the `reverseList` by adding elements from the `nums` array in reverse order.
6. Return the `reverseList`.


## Code
```python

from typing import List

def reverseArray(n: int, nums: List[int]) -> List[int]:
    reverseList = []

    if n == 0:
        return nums[0]
    else:
        reverseArray(n-1, nums)

    reverseList = [nums[n-1]] + reverseList

    return reverseList

```

## Complexity Analysis
- Time Complexity: The time complexity of this approach is O(n), where n is the length of the input array `nums`. This is because the function performs a constant number of operations for each element in the array.
- Space Complexity: The space complexity is O(n), as the function utilizes additional space for the recursive call stack and the `reverseList` array.
