import readline from 'readline-sync';

function getUserInput(bool) {
    let userInput;

    if (bool) {
        userInput = readline.question();
    }
    return userInput;
}

// NOTE: Basic Level

// COMPLETE: Write a program to check if a number is even or odd
function isEven(num) {
    let numType;

    let remainder = num % 2;

    if (remainder == 0) {
        numType = true;
    } else {
        numType = false;
    }

    let output = `${num} is ${numType ? 'Even' : 'Odd'}`;

    console.log(output);
}

// isEven(getUserInput(true));

// TODO: Write a program to check if a number is positive, negative, or zero
function signCheck(num) {
    if (num < 0) {
        console.log(`${num} is negative`);
    } else if (num > 0) {
        console.log(`${num} is positive`);
    } else {
        console.log(`${num} is zero`);
    }
}

signCheck(getUserInput(true));

// TODO: Check if a person is eligible to vote (age >= 18)
// TODO: Find the greater of two numbers
// TODO: Check if a number is divisible by both 5 and 11

// NOTE: Intermediate Level
// TODO: Implement a leap year checker
// TODO: Create a grade calculator (A, B, C, D, F based on marks)
// TODO: Check if three given sides form a valid triangle
// TODO: Identify if a character is a vowel, consonant, digit, or special character
// TODO: Build a simple calculator (+, -, *, /)

// NOTE: Advanced Level
// TODO: Find the largest of three numbers
// TODO: Implement a profit or loss calculator
// TODO: Write an electricity bill calculator with tiered pricing
// TODO: Determine the type of triangle (Equilateral, Isosceles, Scalene)
// TODO: Map numbers 1-7 to corresponding days of the week
