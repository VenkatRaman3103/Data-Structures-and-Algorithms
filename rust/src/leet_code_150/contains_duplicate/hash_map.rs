use std::collections::HashMap;

pub fn contains_duplicates(nums: Vec<i32>) -> bool {
    let mut hash_table = HashMap::new();

    for n in nums {
        let is_exist = hash_table.get(&n).copied().unwrap_or(0);

        if is_exist != 0 {
            return true;
        } else {
            hash_table.insert(n, 1);
        }
    }

    false
}
