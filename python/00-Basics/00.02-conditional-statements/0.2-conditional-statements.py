import os

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

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
# COMPLETE: Implement a leap year checker
def is_leap_year(year):
    if (year % 4 == 0):
        print(year, "is a leap year")
    else:
        print(year, "is not a leap year")

# COMPLETE: Create a grade calculator (A, B, C, D, F based on marks)
def grade_calculator(mark):
    if(mark >= 90 and mark <= 100):
        print("A")
    elif (mark >= 80 and mark <= 90):
        print("B")
    elif (mark >= 70 and mark <= 80):
        print("C")
    elif (mark >= 60 and mark <= 70):
        print("D")
    elif (mark >= 50 and mark <= 60):
        print("E")
    elif (mark >= 40 and mark <= 50):
        print("F")
    elif (mark >=0 and mark<= 39):
        print("E")
    else:
        print("invalid mark")

# COMPLETE: Check if three given sides form a valid triangle
def is_valid_triangle(side1):
    side2 = int(input())
    side3 = int(input())

    if (side1 + side2 > side3 or side3 + side2 > side1 or side3 + side1 > side2):
        print("valid triangle")
    else:
        print("invalid triangle")

# COMPLETE: Identify if a character is a vowel, consonant, digit, or special character
def identify_character():
    user_input = input()

    vowels = ["a", "e", "i", "o", "u"]
    special_char = ["!", "@", "#", "$", "%", "^", "&", "*"]

    try:
        get_int = int(user_input)
        print(get_int, "is a number")
    except :
        if (user_input in vowels):
            print(user_input, "is vowel")
        elif (user_input in special_char):
            print(user_input, "is special character")
        else:
            print(user_input, "is consonant")
        

# TODO: Build a simple calculator (+, -, *, /)
def simple_calculator(num1):
    num2 = int(input())

    operation = input("\nadd\nsub\nmul\ndiv\n")

    if operation == "add":
        print(num1 + num2)
    elif operation == "sub":
        print(num1 - num2)
    elif operation == "mul":
        print(num1 * num2)
    elif operation == "div":
        print(num1 / num2)
    else:
        print("invalid operation")


# NOTE: Advanced Level
# COMPLETE: Find the largest of three numbers
def findLargesOfThree(num1, num2, num3):
    numList = [num1, num2, num3]

    largest = numList[0]

    for n in numList:
        if largest < n:
            largest = n

    return largest


# COMPLETE: Implement a profit or loss calculator
def profitAndLoss(investment, earned):
    if investment > earned:
        print(f"loss is {investment - earned}")
    elif earned >investment :
        print(f"earned is { earned - investment}")


clear()
profitAndLoss(10, 60)

# TODO: Write an electricity bill calculator with tiered pricing
# TODO: Determine the type of triangle (Equilateral, Isosceles, Scalene)
# TODO: Map numbers 1-7 to corresponding days of the week

# if __name__ == "__main__":
#     userInput = int(input())
#
#     # isEven(userInput)
#     # check_sign(userInput)
#     # voting_eligibilty(userInput)
#     # greatest_number(userInput)
#     # is_number_divisible_5_or_11(userInput)
#     # is_leap_year(userInput)
#     # grade_calculator(userInput)
#     # is_valid_triangle(userInput)
#     # identify_character()
#     # simple_calculator(userInput)
#     # findLargesOfThree(1, 2, 3)

