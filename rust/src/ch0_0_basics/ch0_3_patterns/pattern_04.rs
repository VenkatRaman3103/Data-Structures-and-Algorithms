#[allow(dead_code)]
pub fn pattern_04() {
    let row: i32 = 5;
    let column: i32 = 5;

    for i in 1..row + 1 {
        for j in 1..column + 1 {
            if j <= i {
                print!("{}", i)
            } else if j > i {
                print!(" ")
            }
        }
        println!()
    }
}
