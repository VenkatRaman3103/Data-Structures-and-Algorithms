#[allow(dead_code)]
pub fn pattern_14() {
    let row: i32 = 5;
    let column: i32 = 5;

    let mut count: i32 = 1;

    for i in 1..=row {
        for j in 1..=column {
            if j <= i {
                print!("{count} ");
                count += 1;
            } else if j > i {
                print!(" ")
            }
        }
        println!()
    }
}
