use std::io;

fn main() {
    let mut user_input = String::new();

    io::stdin()
        .read_line(&mut user_input)
        .expect("Error in reading the user input");

    println!("user_input: {}", user_input);
}
