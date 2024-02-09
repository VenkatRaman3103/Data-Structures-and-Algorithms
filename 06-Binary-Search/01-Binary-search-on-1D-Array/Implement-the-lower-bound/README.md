# Lower Bound Implementation

## Intuition
Lower bound is an algorithmic concept used to find the first element in a sorted array that is greater than or equal to a given value. This can be useful in scenarios where you need to find the insertion point of an element in a sorted array or determine the lower boundary for a certain value. 

## Approach
1. Sort the input array to ensure it's in ascending order.
2. Use binary search to efficiently find the lower bound:
   - Initialize two pointers, `start` and `end`, to represent the range of the array to search.
   - While the `start` pointer is less than the `end` pointer:
     - Calculate the middle index.
     - Check if the element at the middle index is greater than or equal to the target value (`x`):
       - If it is, update `end` to the middle index.
       - If not, update `start` to the middle index + 1.
   - Once the loop breaks, return the element at the `end` index if it's greater than or equal to `x`, else return -1.

## Explanation
This algorithm sorts the array first to ensure that binary search can be applied. Then, it performs a modified binary search where it continually shrinks the search range until it finds the lower bound. If the element at the middle index is greater than or equal to `x`, it updates the `end` pointer to narrow the search range. If the element is less than `x`, it updates the `start` pointer. The loop continues until `start` is no longer less than `end`, at which point the lower bound is either found or not found.

## Code
```python


from typing import *

def implementLowerBound(arr: List[int], n: int, x: int) -> int:
    arr.sort()

    start = 0
    end = n - 1

    ans = n 

    while start <= end:
        mid = (start + end) // 2
        
        if arr[mid] <= x:
            ans = mid
            start = mid + 1

        elif x <= arr[mid]:
            end = mid - 1
            
    return ans

```

# Time and Space Complexities Analysis
- Time Complexity: O(log n) for binary search, where n is the size of the input array. Sorting the array adds an additional O(n log n), but since it's dominated by the binary search, the overall time complexity is O(log n).
- Space Complexity: O(1) as the algorithm operates in-place without any additional data structures.