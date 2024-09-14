# Reverse Integer

## Intuition
The problem requires reversing the digits of an integer while preserving its sign. We need to handle overflow cases where the reversed integer might exceed the signed 32-bit integer range. 

## Approach
1. Define constants for maximum and minimum integer values.
2. Determine the sign of the input integer.
3. Take the absolute value of the integer to perform reversal.
4. Initialize a variable to store the reversed number.
5. Iterate through the digits of the integer using modulo and division operations.
6. Build the reversed number by multiplying the current reversed number by 10 and adding the last digit of the input.
7. Check for overflow by comparing the reversed number with the integer limits.
8. Return the reversed number with the appropriate sign.

## Explanation
- The function `reverse(x: int) -> int` takes an integer `x` and returns its reversed form.
- It first determines the sign of the input integer.
- Then it takes the absolute value of the integer to perform reversal.
- The while loop extracts the last digit of the integer, adds it to the reversed number after multiplying it by 10, and updates the integer by removing the last digit.
- After the loop, it checks for overflow and returns 0 if the reversed number exceeds the signed 32-bit integer range.
- Finally, it returns the reversed number with the appropriate sign.

## Code

```python


def reverse(x: int) -> int:
    INT_MAX = 2 ** 31 - 1
    INT_MIN = -2 ** 31

    sign = 1

    if x < 0:
        sign = -1
    
    x = abs(x)

    revNum = 0

    while x != 0:
        lastNum = x % 10
        revNum = (revNum * 10) + lastNum
        x //= 10

    if revNum > INT_MAX or revNum < INT_MIN:
        return 0

    return revNum * sign

```

## Time Complexity
- The time complexity is O(log10(n)), where n is the input integer. This is because we are dividing the input integer by 10 in each iteration of the while loop.

## Space Complexity
- The space complexity is O(1) because we are using a constant amount of extra space regardless of the input size.