pub fn pattern_17() {
    let column: usize = 5;

    let arr: [char; 5] = ['a', 'b', 'c', 'd', 'e'];

    for (i, char) in arr.iter().enumerate() {
        for j in 0..column {
            if j <= i {
                print!("{char}")
            } else if j > i {
                print!(" ")
            }
        }
        println!()
    }
}
