# isPalindrome Function

## Intuition

The `isPalindrome` function checks whether a given input string `s` is a palindrome or not. A palindrome is a sequence of characters that reads the same forward as backward, ignoring spaces, punctuation, and capitalization.

## Approach

1. **Clean the Input:**
   - Iterate through each character in the input string `s`.
   - If the character is an alphabet or a digit, append its lowercase version to the `string`.

2. **Check Palindrome:**
   - Compare the cleaned string with its reverse to determine if it is a palindrome.
   - Return `True` if the string is equal to its reverse; otherwise, return `False`.

```python

def isPalindrome(s: str) -> bool:

    string = ''

    for char in s:
        if char.isalpha() or char.isdigit():
            string += char.lower()

    return string == string[::-1]

```

## Explanation

The function iterates through each character in the input string, discarding non-alphanumeric characters and converting alphabets to lowercase. This results in a cleaned string containing only alphanumeric characters in lowercase.

The cleaned string is then compared with its reverse to check if it reads the same forward and backward, adhering to the definition of a palindrome. The function returns `True` if the string is a palindrome and `False` otherwise.

## Complexities

- **Time Complexity:**
  - The loop iterates through each character in the input string, resulting in a time complexity of O(n), where n is the length of the input string.

- **Space Complexity:**
  - Additional space is used to store the cleaned string. In the worst case, the space complexity is O(n), where n is the length of the input string.


