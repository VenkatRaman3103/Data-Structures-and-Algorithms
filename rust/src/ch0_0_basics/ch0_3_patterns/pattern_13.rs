pub fn pattern_13() {
    let row: i32 = 5;
    let column: i32 = 10;

    for i in 1..=row {
        for j in 1..column {
            if j <= column / 2 {
                if j <= i {
                    print!("{j}")
                } else if j > i {
                    print!(" ")
                }
            } else if j > column / 2 {
                let new_j = column - j;
                if new_j <= i {
                    print!("{new_j}")
                } else if new_j > i {
                    print!(" ")
                }
            }
        }
        println!()
    }
}
