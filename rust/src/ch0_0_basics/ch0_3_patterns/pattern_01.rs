#[allow(dead_code)]
pub fn pattern_01() {
    let row: i32 = 5;

    let column: i32 = 5;

    for _ in 1..row + 1 {
        for _ in 1..column + 1 {
            print!("*")
        }
        println!()
    }
}
