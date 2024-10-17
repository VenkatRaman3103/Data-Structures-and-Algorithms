# 3Sum Problem

## Problem Statement

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. The solution set must not contain duplicate triplets.

## Intuition

To find triplets that sum up to zero, sorting the array provides a structured approach. Using a two-pointer technique, we can efficiently iterate through the sorted array, fixing one element and finding the other two in the remaining portion.

## Approach

1. Sort the array `nums` in ascending order.
2. Initialize an empty list `result` to store the triplets.
3. Iterate through each element `nums[i]` in the array.
   - Use two pointers, `j` and `k`, initialized to the next and last indices respectively.
   - Check if the sum of `nums[i]`, `nums[j]`, and `nums[k]` is equal to zero.
     - If so, add the triplet to the `result` list.
     - Move both pointers towards each other, skipping duplicates.
   - If the sum is greater than zero, decrement `k`.
   - If the sum is less than zero, increment `j`.
4. Continue this process until the end of the array.

## Explanation

- The code starts by sorting the array to simplify the process of finding triplets.
- It then uses a loop to iterate through each element as a potential starting point of a triplet.
- Inside the loop, two pointers (`j` and `k`) are used to find the other two elements.
- Duplicate triplets are avoided by skipping elements with the same value as the previous one.

## My Code

```python

def threeSum(nums: List[int]) -> List[List[int]]:
    n = len(nums)
    nums.sort()
    result = []
    
    for i in range(n):
        if i != 0 and nums[i] == nums[i - 1]:
            continue
        j = i + 1
        k = n - 1
        while j < k:
            summation = nums[i] + nums[j] + nums[k]
            if summation == 0:
                arr_sort = [nums[i], nums[j], nums[k]]
                result.append(arr_sort)
                k -= 1
                j += 1
                while j < k and nums[j] == nums[j - 1]:
                    j += 1
                while j < k and nums[k] == nums[k + 1]:
                    k -= 1
            if summation > 0:
                k -= 1
            elif summation < 0:
                j += 1
    
    return result

```

# Time and Space Complexities Analysis

- Time Complexity: O(n^2) - The nested loops iterate through the array with the two-pointer technique, where each iteration takes O(n) time.
- Space Complexity: O(1) - The only extra space used is for variables (n, result, i, j, k, summation, and arr_sort), which is constant.
