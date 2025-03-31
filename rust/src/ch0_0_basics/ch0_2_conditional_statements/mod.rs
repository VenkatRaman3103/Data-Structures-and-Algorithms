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
