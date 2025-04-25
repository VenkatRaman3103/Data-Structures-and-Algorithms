pub fn pattern_12() {
    let row: i32 = 5;
    let column: i32 = 5;

    for i in 1..=row {
        let mut count: i32 = i;
        for j in 1..=column {
            if j <= i {
                if count % 2 == 0 {
                    print!("0");
                } else {
                    print!("1")
                }
                count -= 1;
            } else if j > i {
                print!(" ")
            }
        }
        println!()
    }
}
