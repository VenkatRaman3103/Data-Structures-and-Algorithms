# Minimum Difference Between Highest and Lowest of K Scores

## Overview

This code implements a function called `minimumDifference` that calculates the minimum difference between elements in a sorted list. The function takes two parameters - a list of integers (`nums`) and an integer (`k`), and returns the minimum difference between any two elements when considering only a subsequence of length `k` from the sorted list.

## Intuition

Sorting the input list is the key step to efficiently find the minimum difference. By sorting the list, we ensure that elements with close values are positioned nearby. The algorithm then traverses the sorted list with a sliding window approach, calculating the difference between the left and right boundaries of the window. The minimum difference is updated as we move through the list.

## Approach

1. Sort the input list `nums` in ascending order.
2. Initialize two pointers, `l` and `r`, pointing to the start and end of a subsequence of length `k - 1` within the sorted list.
3. Iterate through the list using a while loop until `l` is less than `r`.
4. Calculate the difference between the elements at positions `l` and `r`.
5. Update the `minimum_value` with the minimum of its current value and the calculated difference.
6. Move the window by incrementing `l` and `r`.
7. Return the final `minimum_value` after the loop.

## Code

```python

def minimumDifference(nums: List[int], k: int) -> int:
    nums.sort()

    l = 0
    r = k - 1

    minimum_value = float('inf')

    while l < r:
        difference = nums[l] - nums[r]

        minimum_value = min(minimum_value, difference)
    
    return minimum_value

```

## Explanation

The sorting step ensures that elements within the subsequence are close to each other in value. The sliding window approach efficiently explores the differences between adjacent elements. The minimum difference is tracked and updated during the traversal of the sorted list.

## Time Complexity

The time complexity of this algorithm is dominated by the sorting step, which is O(n log n), where n is the length of the input list. The subsequent traversal with the sliding window is linear, making the overall time complexity O(n log n).

## Space Complexity

The space complexity is O(1), as the algorithm uses only a constant amount of extra space for variables such as pointers and the minimum value.
