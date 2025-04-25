#[allow(dead_code)]
pub fn pattern_09() {
    let row: i32 = 5;
    let column: i32 = 10;

    for i in (1..=row).rev() {
        for j in (0..=column).rev() {
            if j >= column / 2 {
                let new_j: i32 = j - column / 2;

                match new_j.cmp(&i) {
                    std::cmp::Ordering::Less => print!("*"),
                    std::cmp::Ordering::Greater => print!(" "),
                    std::cmp::Ordering::Equal => {}
                }
            } else if j < column / 2 {
                let new_j: i32 = column / 2 - j;

                match new_j.cmp(&i) {
                    std::cmp::Ordering::Greater => print!(" "),
                    std::cmp::Ordering::Less => print!("*"),
                    std::cmp::Ordering::Equal => {}
                }
            }
        }
        println!()
    }
}
