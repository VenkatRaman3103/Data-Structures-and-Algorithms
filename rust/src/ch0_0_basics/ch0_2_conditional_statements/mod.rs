use core::num;
use std::{any::type_name, io};

#[allow(dead_code)]
fn type_of<T>(_: &T) -> &'static str {
    type_name::<T>()
}

fn get_user_input() -> std::string::String {
    let mut user_input = String::new();

    io::stdin()
        .read_line(&mut user_input)
        .expect("Error in getting userinput");

    user_input.trim().to_string()
}

// NOTE: Basic Level

// COMPLETE: Write a program to check if a number is even or odd
#[allow(dead_code)]
pub fn is_even() {
    let num: i32 = get_user_input().parse().expect("Invalid type");

    let get_type = type_of(&num);

    if get_type == "i32" {
        if num % 2 == 0 {
            println!("{} is Even", num)
        } else {
            println!("{} is Odd", num)
        }
    } else {
        println!("Invalid input")
    }
}

// COMPLETE: Write a program to check if a number is positive, negative, or zero
#[allow(dead_code)]
pub fn check_sign() {
    let user_input: i32 = get_user_input()
        .parse()
        .expect("error in parsing the user input");

    match user_input {
        user_input if user_input > 0 => println!("{} is positive integer", user_input),
        user_input if user_input < 0 => println!("{} is negative integer", user_input),
        _ => println!("{} is zero", user_input),
    }
}

// COMPLETE: Check if a person is eligible to vote (age >= 18)
#[allow(dead_code)]
pub fn voting_eligibility() {
    let age: i32 = get_user_input()
        .parse()
        .expect("error in parsing the user input");

    if age >= 18 {
        println!("you are eligibile for voting")
    } else {
        println!("you are not eligible for voting")
    }
}

// COMPLETE: Find the greater of two numbers
#[allow(dead_code)]
pub fn find_greatest() {
    let num_1: i32 = get_user_input()
        .parse()
        .expect("error in parsing the user input 1");

    let num_2: i32 = get_user_input()
        .parse()
        .expect("error in parsing the user input 2");

    match num_1 {
        num_1 if num_1 > num_2 => println!("{} is greater than {}", num_1, num_2),
        num_1 if num_2 > num_1 => println!("{} is greater than {}", num_2, num_1),
        _ => println!("{} is equal to {}", num_2, num_1),
    }
}

// COMPLETE: Check if a number is divisible by both 5 and 11
#[allow(dead_code)]
pub fn is_divisible_5_and_11() {
    let num: i32 = get_user_input()
        .parse()
        .expect("error in parsing the user input 1");

    if num % 5 == 0 {
        println!("{} is divisble by 5", num);
    } else if num % 11 == 0 {
        println!("{} is divisble by 11", num)
    } else {
        println!("{} is neither divisble by 11 nor by 5", num)
    }
}

// NOTE: Intermediate Level

// COMPLETE: Implement a leap year checker
#[allow(dead_code)]
pub fn check_leap_year() {
    let year: i32 = get_user_input()
        .parse()
        .expect("error in getting user input");

    if year % 4 == 0 {
        println!("{} is a leap year", year)
    } else {
        println!("{} is a not leap year", year)
    }
}

// COMPLETE: Create a grade calculator (A, B, C, D, F based on marks)
#[allow(dead_code)]
pub fn grade_calculator() {
    let mark: i32 = get_user_input()
        .parse()
        .expect("error in getting user mark");

    if (90..100).contains(&mark) {
        println!("A grade");
    } else if (80..90).contains(&mark) {
        println!("B grade");
    } else if (70..80).contains(&mark) {
        println!("C grade");
    } else if (60..70).contains(&mark) {
        println!("D grade");
    } else if (50..60).contains(&mark) {
        println!("E grade");
    } else if (0..50).contains(&mark) {
        println!("D grade");
    } else {
        println!("Invalid mark")
    }
}

// COMPLETE: Check if three given sides form a valid triangle
#[allow(dead_code)]
pub fn is_valid_triangle() {
    let side_1: i32 = get_user_input().parse().expect("error in getting side_1");
    let side_2: i32 = get_user_input().parse().expect("error in getting side_2");
    let side_3: i32 = get_user_input().parse().expect("error in getting side_3");

    if side_1 + side_2 > side_3 && side_1 + side_3 > side_2 && side_3 + side_2 > side_1 {
        println!("Valid triangle")
    } else {
        println!("Invalid triangle")
    }
}

// COMPLETE: Identify if a character is a vowel, consonant, digit, or special character
#[allow(dead_code)]
pub fn indentify_character() {
    let vowels = ["a", "u", "i", "o", "e"];
    let special_character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    let user_input = get_user_input();

    if vowels.contains(&user_input.as_str()) {
        println!("{} is vowels", user_input)
    } else if special_character.contains(&user_input.as_str()) {
        println!("{} is special character", user_input)
    } else if user_input.parse::<i32>().is_ok() {
        println!("{} is a number", user_input);
    } else {
        println!("{} is consonant", user_input)
    }
}

// COMPLETE: Build a simple calculator (+, -, *, /)
pub fn simple_calculator() {
    let num_1: i32 = get_user_input()
        .parse()
        .expect("error in getting user input");

    let num_2: i32 = get_user_input()
        .parse()
        .expect("error in getting user input");

    println!("\n-add,\n-sub,\n-mul,\n-div");

    let operation = get_user_input();

    if operation == "add" {
        println!("{}", num_1 + num_2)
    } else if operation == "sub" {
        println!("{}", num_1 - num_2)
    } else if operation == "mul" {
        println!("{}", num_1 * num_2)
    } else if operation == "div" {
        println!("{}", num_1 / num_2)
    } else {
        println!("Invalid operation")
    }
}

// NOTE: Advanced Level

// TODO: Find the largest of three numbers
// TODO: Implement a profit or loss calculator
// TODO: Write an electricity bill calculator with tiered pricing
// TODO: Determine the type of triangle (Equilateral, Isosceles, Scalene)
// TODO: Map numbers 1-7 to corresponding days of the week
