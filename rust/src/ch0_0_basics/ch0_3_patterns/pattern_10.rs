use std::cmp::Ordering;

#[allow(dead_code)]
pub fn pattern_10() {
    let row: i32 = 10;
    let column: i32 = 10;

    for i in (0..=row).rev() {
        for j in 0..=column {
            if j <= column / 2 {
                if i >= row / 2 {
                    let new_i: i32 = i - row / 2;

                    match j.cmp(&new_i) {
                        Ordering::Less => print!(" "),
                        Ordering::Equal => print!("*"),
                        Ordering::Greater => print!("*"),
                    }
                } else if i < row / 2 {
                    let new_i: i32 = row / 2 - i;

                    match j.cmp(&new_i) {
                        Ordering::Greater => print!("*"),
                        Ordering::Equal => print!("*"),
                        Ordering::Less => print!(" "),
                    }
                }
            } else if j > column / 2 {
                let new_j: i32 = column - j;
                if i >= row / 2 {
                    let new_i: i32 = i - row / 2;

                    match new_j.cmp(&new_i) {
                        Ordering::Less => print!(" "),
                        Ordering::Equal => print!("*"),
                        Ordering::Greater => print!("*"),
                    }
                } else if i < row / 2 {
                    let new_i: i32 = row / 2 - i;

                    match new_j.cmp(&new_i) {
                        Ordering::Greater => print!("*"),
                        Ordering::Equal => print!("*"),
                        Ordering::Less => print!(" "),
                    }
                }
            }
        }
        println!()
    }
}
