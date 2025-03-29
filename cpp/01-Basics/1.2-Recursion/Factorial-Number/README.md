# Factorial Numbers

## Intuition
The goal of this code is to generate a list of factorial numbers up to a given limit `n`. Factorial numbers are those that are obtained by multiplying a number by all the numbers below it, down to 1. The intuition behind this function is to iteratively calculate factorial numbers until reaching the limit `n`.

## Approach
1. Initialize an empty list `arr` to store the factorial numbers.
2. Initialize `Value` to 1 and `nextValue` to 2.
3. Iterate while `Value` is less than or equal to `n`:
    - Append `Value` to the list `arr`.
    - Update `Value` by multiplying it with `nextValue`.
    - Increment `nextValue` by 1.
4. Return the list `arr` containing the factorial numbers.


## Code
```python


def factorialNumbers(n: int) -> List[int]:
    arr = []

    Value = 1
    nextValue = 2

    while Value <= n:
        arr.append(Value)
        Value *= nextValue
        nextValue += 1
    
    return arr

```

## Complexity Analysis
- Time Complexity: The time complexity of this approach is O(log(n!)), where `n` is the input limit. This is because we are iterating until `Value` is less than or equal to `n`, and each iteration involves multiplying `Value` with the next value, which is gradually incremented. However, this doesn't require computing the entire factorial; hence it's more efficient than computing factorial and then storing it.
- Space Complexity: The space complexity is O(log(n)), as we are storing the factorial numbers in the list `arr`, which grows logarithmically with `n`.
