# NOTE: Basic Level
# COMPLETE: Write a program to check if a number is even or odd
def is_even(num):

    if (num % 2 == 0):
        print(num, "is even")
    else :
        print(num, "is odd")

# COMPLETE: Write a program to check if a number is positive, negative, or zero
def check_sign(num):
    if (num < 0):
        print(num, "is a negative integer")
    elif (num > 0):
        print(num, "is a positive integer")
    else:
        print(num, "is zero")

# COMPLETE: Check if a person is eligible to vote (age >= 18)
def voting_eligibilty(age):
    if (age >= 18):
        print("you are eligible for voting")
    else:
        print("you are not eligible for voting")

# COMPLETE: Find the greater of two numbers
def greatest_number(num1):
    num2 = int(input())

    if (num1 > num2):
        print(num1, "is greater than ", num2)
    elif (num2 > num1):
        print(num2, "is greater than ", num1)
    else:
        print(num2, "equal to", num1)

# COMPLETE: Check if a number is divisible by both 5 and 11
def is_number_divisible_5_or_11(num):
    if (num % 11 == 0):
        print(num, "is divisible by 11")
    elif (num % 5 == 0):
        print(num, "is divisible by 5")
    else:
        print(num, "is neither divisible by 11 nor by 5")

# NOTE: Intermediate Level
# TODO: Implement a leap year checker
# TODO: Create a grade calculator (A, B, C, D, F based on marks)
# TODO: Check if three given sides form a valid triangle
# TODO: Identify if a character is a vowel, consonant, digit, or special character
# TODO: Build a simple calculator (+, -, *, /)
#
# NOTE: Advanced Level
# TODO: Find the largest of three numbers
# TODO: Implement a profit or loss calculator
# TODO: Write an electricity bill calculator with tiered pricing
# TODO: Determine the type of triangle (Equilateral, Isosceles, Scalene)
# TODO: Map numbers 1-7 to corresponding days of the week

if __name__ == "__main__":
    userInput = int(input())

    # isEven(userInput)
    # check_sign(userInput)
    # voting_eligibilty(userInput)
    # greatest_number(userInput)
    is_number_divisible_5_or_11(userInput)
