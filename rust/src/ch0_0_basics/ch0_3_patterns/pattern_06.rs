#[allow(dead_code)]
pub fn pattern_06() {
    let row: i32 = 5;
    let column: i32 = 5;

    for i in (1..row + 1).rev() {
        for j in 1..column + 1 {
            if j <= i {
                print!("{}", j)
            } else if j > i {
                print!(" ")
            }
        }
        println!()
    }
}
