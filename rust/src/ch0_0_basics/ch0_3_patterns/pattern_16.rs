#[allow(dead_code)]
pub fn pattern_16() {
    let row: usize = 5;

    let arr: [char; 5] = ['a', 'b', 'c', 'd', 'e'];

    for i in (0..row).rev() {
        for (j, char) in arr.iter().enumerate() {
            if j <= i {
                print!("{char}")
            } else if j > i {
                print!(" ")
            }
        }
        println!()
    }
}
