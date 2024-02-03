# FourSum Problem

## Problem Description
Given an array of integers `nums` and an integer `target`, find all unique quadruplets in the array which sum up to the target.

## Intuition
The problem involves finding combinations of four elements whose sum equals the target. A common strategy is to sort the array and use two pointers approach for efficient traversal.

## Approach

### Brute Force
- Iterate through all possible combinations of four elements using nested loops.
- Use a set to store unique combinations.

```python

def fourSum(nums: List[int], target: int) -> List[List[int]]:
    n = len(nums)

    brute force

    set_arr = set()

    for i in range(n):
        for j in range(i+1, n):
            for k in range(j+1, n):
                for l in range(k+1, n):
                    if nums[i] + nums[j] + nums[k] + nums[l] == target:
                        temp_arr = [nums[i] , nums[j] , nums[k] , nums[l]]

                        temp_arr.sort()

                        set_arr.add(tuple(temp_arr))

    answer = []
    for arr in set_arr:
        answer.append(list(arr))

    return answer




```
- Time Complexity: O(n^4)
- Space Complexity: O(1)

### Better Approach
- Fix the first two elements and use a hash table to find the remaining two elements efficiently.

```python

def fourSum(nums: List[int], target: int) -> List[List[int]]:
    n = len(nums)

    set_arr = set()

    for i in range(n):
        for j in range(i+1, n):
            hash_table = set()

            for k in range(j + 1, n):
                summation = nums[i] + nums[j] + nums[k]

                l = target - summation

                hash_table.add(nums[k])

                if l in hash_table:
                    temp_arr = [nums[i], nums[j], nums[k],  l]
                    temp_arr.sort()

                    set_arr.add(tuple(temp_arr))

    answer = []
    for arr in set_arr:
        answer.append(list(arr))

    return answer


```
- Time Complexity: O(n^3)
- Space Complexity: O(n)

### Optimal Solution
- Sort the array.
- Fix the first two elements and use two pointers to find the remaining two elements.

```python
def fourSum(nums: List[int], target: int) -> List[List[int]]:
    n = len(nums)
    nums.sort()

    answer = []

    for i in range(n):
        if i != 0 and nums[i - 1] == nums[i]:
            continue

        for j in range(i + 1, n):
            if j > i + 1 and nums[j - 1] == nums[j]:
                continue

            k = j + 1
            l = n - 1

            while k < l:
                summation = nums[i] + nums[j] + nums[k] + nums[l]

                if summation == target:
                    temp_arr = [nums[i], nums[j], nums[k], nums[l]]
                    answer.append(temp_arr)

                    k += 1
                    l -= 1

                    while k < l and nums[k - 1] == nums[k]:
                        k += 1

                    while k < l and nums[l] == nums[l + 1]:
                        l -= 1

                if summation < target:
                    k += 1

                if summation > target:
                    l -= 1

    return answer

```

- Skip duplicates to avoid redundant solutions.
- Time Complexity: O(n^3)
- Space Complexity: O(1)

## Explanation
1. **Brute Force**: Simple but inefficient approach, leading to high time complexity.
2. **Better Approach**: Reduces time complexity by using a hash table, but still not optimal.
3. **Optimal Solution**: Achieves the best time complexity by sorting the array and using two pointers.

