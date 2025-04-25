#[allow(dead_code)]
pub fn pattern_11() {
    let row: i32 = 10;
    let colums: i32 = 5;

    for i in 1..row {
        for j in 1..=colums {
            if i <= row / 2 {
                if j <= i {
                    print!("*")
                } else if j > i {
                    print!(" ")
                }
            } else if i > row / 2 {
                let new_i = row - i;
                if j <= new_i {
                    print!("*")
                } else if j > new_i {
                    print!(" ")
                }
            }
        }

        println!()
    }
}
