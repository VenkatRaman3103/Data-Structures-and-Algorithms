# Armstrong Number

## Description

This function, `isArmstrong`, determines whether a given number is an Armstrong number or not. An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

## Intuition

To check if a number is an Armstrong number, we need to find the number of digits in the given number and then calculate the sum of each digit raised to the power of the number of digits. Finally, we compare this sum with the original number to check for equality.

## Approach

1. Calculate the number of digits in the given number.
2. Compute the sum of each digit raised to the power of the number of digits.
3. Compare the sum with the original number.
4. Return `True` if the sum is equal to the original number, indicating that it's an Armstrong number. Otherwise, return `False`.

## Explanation

-   We initialize `power` to 0 to count the number of digits.
-   In the first `while` loop, we count the number of digits in the given number by continuously dividing it by 10 until it becomes 0.
-   After counting digits, we calculate the sum of each digit raised to the power of the number of digits using another `while` loop.
-   We return `True` if the computed sum is equal to the original number; otherwise, we return `False`.

## Code

```python


def isArmstrong(num):
    checkNum = num
    tempNum = num
    power = 0
    while num != 0:
        power += 1
        num //= 10
    armstrongNum = 0
    while tempNum != 0:
        lastNum = tempNum % 10
        armstrongNum = armstrongNum + lastNum ** power
        tempNum //= 10
    return armstrongNum == checkNum

```

## Time Complexity
- Calculating the number of digits: O(log10(num))
- Calculating the sum of digits raised to the power: O(log10(num))
Overall time complexity: O(log10(num))
## Space Complexity
- We use a few variables regardless of the size of the input number.
Overall space complexity: O(1)