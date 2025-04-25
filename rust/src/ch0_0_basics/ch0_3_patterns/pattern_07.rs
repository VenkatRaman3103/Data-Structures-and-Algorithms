#[allow(dead_code)]
pub fn pattern_07() {
    let row: i32 = 5;
    let column: i32 = 5;

    for i in 1..row + 1 {
        for j in (1..column + 1).rev() {
            if i >= j {
                print!("{}", j)
            } else if j > i {
                print!(" ")
            }
        }
        println!()
    }
}
