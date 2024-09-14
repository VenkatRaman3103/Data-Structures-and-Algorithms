# Fibonacci Number

## Intuition
The purpose of this code is to compute the nth Fibonacci number. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The intuition behind this function is to use a recursive approach to compute Fibonacci numbers.

## Approach
1. Define a method `fib(n: int) -> int` to compute the nth Fibonacci number.
2. Check if `n` is less than or equal to 1. If so, return `n`.
3. Otherwise, recursively call the `fib` function with `n-1` and `n-2`, and return the sum of the results.
4. Each recursive call breaks down the problem into smaller subproblems until reaching the base cases (`n = 0` or `n = 1`), and then computes the Fibonacci numbers accordingly.


## Code
```python

def fib(n: int) -> int:
    if n <= 1:
        return n
        
    return fib(n-1) + fib(n-2)

```

## Complexity Analysis
- Time Complexity: The time complexity of this approach is O(2^n), as each recursive call branches into two further calls, leading to an exponential increase in the number of function calls.
- Space Complexity: The space complexity is O(n), as the recursive call stack can grow up to `n` levels deep, storing the intermediate results of Fibonacci numbers.
