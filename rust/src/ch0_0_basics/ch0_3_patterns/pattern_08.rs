#[allow(dead_code)]
pub fn pattern_08() {
    let row: i32 = 5;
    let column: i32 = 10;

    for i in (1..row + 1).rev() {
        for j in 1..column {
            if j <= column / 2 {
                if i <= j {
                    print!("*")
                } else if j < i {
                    print!(" ")
                }
            } else if j > column / 2 {
                let new_j = column - j;
                if i <= new_j {
                    print!("*")
                } else if new_j < i {
                    print!(" ")
                }
            }
        }
        println!()
    }
}
