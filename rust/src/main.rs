mod leet_code_150;

use leet_code_150::contains_duplicate::hash_map::contains_duplicates;

fn main() {
    let nums = vec![1, 2, 3, 1];

    let result: bool = contains_duplicates(nums);
    println!("{}", result)
}
