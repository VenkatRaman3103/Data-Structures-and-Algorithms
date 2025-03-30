import readline from 'readline-sync';

function getUserInput(bool = true) {
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

// isEven(getUserInput());

// COMPLETE: Write a program to check if a number is positive, negative, or zero
function signCheck(num) {
    if (num < 0) {
        console.log(`${num} is negative`);
    } else if (num > 0) {
        console.log(`${num} is positive`);
    } else {
        console.log(`${num} is zero`);
    }
}

// signCheck(getUserInput());

// COMPLETE: Check if a person is eligible to vote (age >= 18)
function votingEligibility(age) {
    if (age >= 18) {
        console.log('you are eligible for voting');
    } else {
        console.log('you are not eligible for voting');
    }
}

// votingEligibility(getUserInput());

// COMPLETE: Find the greater of two numbers
function findGreatest(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num2} is greater than ${num1}`);
    } else {
        console.log(`both ${num1} and ${num2} are equal`);
    }
}

// findGreatest(getUserInput(), getUserInput());

// COMPLETE: Check if a number is divisible by both 5 and 11
function isDivisibleByFiveAdnEleven(num) {
    let isDivisibleByEleven = num % 11 == 0;
    let isDivisibleByFive = num % 5 == 0;

    if (isDivisibleByEleven) {
        console.log(`${num} is divible by 11`);
    } else if (isDivisibleByFive) {
        console.log(`${num} is divible by 5`);
    } else {
        console.log(`${num} nor divisible by 5 neither by 11`);
    }
}

// isDivisibleByFiveAdnEleven(getUserInput());

// NOTE: Intermediate Level
// COMPLETE: Implement a leap year checker
function isLeapYear(year) {
    if (year % 4 == 0) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

// isLeapYear(getUserInput());

// COMPLETE: Create a grade calculator (A, B, C, D, F based on marks)
function gradeCalulator(grade) {
    if (grade >= 90 && grade <= 100) {
        console.log('A');
    } else if (grade >= 80 && grade <= 90) {
        console.log('B');
    } else if (grade >= 70 && grade <= 80) {
        console.log('C');
    } else if (grade >= 60 && grade <= 70) {
        console.log('D');
    } else if (grade >= 50 && grade <= 60) {
        console.log('F');
    } else {
        console.log('Invalid');
    }
}

// gradeCalulator(getUserInput());

// COMPLETE: Check if three given sides form a valid triangle
function willFormTriangle(side_a, side_b, side_c) {
    function sum(side1, side2) {
        return side1 + side2;
    }

    if (
        sum(side_a, side_b) > side_c &&
        sum(side_b, side_c) > side_a &&
        sum(side_c, side_a) > side_b
    ) {
        console.log('Valid triangle');
        return true;
    } else {
        console.log('Invalid triangle');
        return false;
    }
}

// willFormTriangle(getUserInput(), getUserInput(), getUserInput());

// TODO: Identify if a character is a vowel, consonant, digit, or special character
function identifyCharacter(char) {
    let vowels = ['a', 'u', 'i', 'o', 'e'];
    let specialCharacter = ['+', '-', '*', '/', '.'];

    if (typeof char == 'string') {
        if (specialCharacter.includes(char)) {
            console.log(`${char} is a special character`);
            return;
        }

        if (vowels.includes(char)) {
            console.log(`${char} is a vowel`);
        } else {
            console.log(`${char} is a consonant`);
        }
    } else {
        console.log(`${char} is a digit`);
    }
}

// identifyCharacter(12);

// TODO: Build a simple calculator (+, -, *, /)

// NOTE: Advanced Level
// TODO: Find the largest of three numbers
// TODO: Implement a profit or loss calculator
// TODO: Write an electricity bill calculator with tiered pricing
// TODO: Determine the type of triangle (Equilateral, Isosceles, Scalene)
// TODO: Map numbers 1-7 to corresponding days of the week
