# Palindrome Number

## Intuition
A palindrome number is a number that reads the same forward and backward. To determine if a given integer is a palindrome, we can reverse the number and compare it with the original number.

## Approach
1. Check if the given number is negative. If so, it cannot be a palindrome.
2. Initialize a variable `rev_num` to store the reversed number.
3. Iterate through the digits of the given number using modulus and division.
4. Build the reversed number by multiplying the current reversed number by 10 and adding the last digit of the given number.
5. Check if the original number is equal to the reversed number. If so, return `True`; otherwise, return `False`.

## Explanation
- We handle negative numbers upfront because they can never be palindromes.
- We then reverse the given number by extracting digits one by one and constructing the reversed number.
- Finally, we compare the original number with the reversed number to determine if it is a palindrome.

## My Code
```python


def isPalindrome(x: int) -> bool:
    if x < 0:
        return False
    
    rev_num = 0
    given_num = x

    while x != 0:
        last_num = x % 10
        rev_num = rev_num * 10 + last_num
        x //= 10

    return given_num == rev_num


```

## Time Complexity
- The time complexity of this approach is O(log(n)), where n is the given number. This is because we are dividing the number by 10 in each iteration until it becomes 0.

## Space Complexity
- The space complexity of this approach is O(1), as we are using only a constant amount of extra space regardless of the input size. We're only storing a few integer variables irrespective of the size of the number.