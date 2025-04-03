#include <cctype>
#include <iostream>
#include <limits>
#include <string>
using namespace std;

// NOTE: Basic Level
// TODO: Write a program to check if a number is even or odd
void isEven(int num) {

    if (num % 2 == 0) {
        cout << num << " is even" << endl;
    } else {
        cout << num << " is odd" << endl;
    }
}

// TODO: Write a program to check if a number is positive, negative, or zero
void checkSign(int num) {
    if (num < 0) {
        cout << num << " is negative integer";
    } else if (num > 0) {
        cout << num << " is positive integer";
    } else {
        cout << num << " is zero" << endl;
    }
}

// TODO: Check if a person is eligible to vote (age >= 18)
void eligiblityCheck(int age) {
    if (age >= 18) {
        cout << "you are eligible for voting" << endl;
    } else {
        cout << "you are not eligible for voting" << endl;
    }
}

// TODO: Find the greater of two numbers
void findGreatest(int num) {
    int num_2;

    cin >> num_2;

    if (num > num_2) {
        cout << num << " is greater than " << num_2 << endl;
    } else if (num < num_2) {
        cout << num_2 << " is greater than " << num << endl;
    } else {
        cout << "both " << num << " and " << num_2 << " are equal" << endl;
    }
}

// TODO: Check if a number is divisible by both 5 and 11
void isDivisibleFiveOrEleven(int num) {
    if (num % 5 == 0) {
        cout << num << " is divisible by five" << endl;
    } else if (num % 11 == 0) {
        cout << num << " is divisible by eleven" << endl;
    } else {
        cout << num << " is not divisible by neither eleven nor by five"
             << endl;
    }
}

// NOTE: Intermediate Level
// TODO: Implement a leap year checker
void checkLeapYear(int year) {
    if (year % 4 == 0) {
        cout << year << " is a leap year" << endl;
    } else {
        cout << year << " is not a leap year" << endl;
    }
}

// TODO: Create a grade calculator (A, B, C, D, F based on marks)
void gradeCalculater(int mark) {
    if (mark <= 100 && mark >= 90) {
        cout << "A" << endl;
    } else if (mark >= 80) {
        cout << "B" << endl;
    } else if (mark >= 70) {
        cout << "C" << endl;
    } else if (mark >= 60) {
        cout << "D" << endl;
    } else {
        cout << "Invalid mark" << endl;
    }
}

// TODO: Check if three given sides form a valid triangle
// void isValidTriangle(int side_1) {
//     let side_2;
//     let side_3;
//
//     cim >> side_2;
//     cim >> side_3;
//
//     if (side_1 + side_2 > side_3 && side_1 + side_3 > side_2 &&
//         side_2 + side_3 > side_1) {
//         cout << "valid triangle" << endl;
//     } else {
//         cout << "invalid triangle" << endl;
//     }
// }

// TODO: Identify if a character is a vowel, consonant, digit, or special
// character
void indentifyCharacter(int num) {
    //
    if (std::isdigit(num)) {
        cout << num << endl;
    }
}

// TODO: Build a simple calculator (+, -, *, /)

// NOTE: Advanced Level
// TODO: Find the largest of three numbers
// TODO: Implement a profit or loss calculator
// TODO: Write an electricity bill calculator with tiered pricing
// TODO: Determine the type of triangle (Equilateral, Isosceles, Scalene)
// TODO: Map numbers 1-7 to corresponding days of the week

int main() {
    int userInput;

    cin >> userInput;

    // isEven(userInput);
    // checkSign(userInput);
    // eligiblityCheck(userInput);
    // findGreatest(userInput);
    // isDivisibleFiveOrEleven(userInput);
    // checkLeapYear(userInput);
    // gradeCalculater(userInput);
    indentifyCharacter(userInput);
}
