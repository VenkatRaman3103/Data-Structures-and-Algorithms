# Arrays and Hashing

## 01 Concatenation of Array

- two nested loops
  - push on res
  - `O(2n)` time
  - `O(n)` space

- one loop
  - index copy on arr
  - `arr[i + n]`
  - `O(n)` time
  - `O(n)` space

## 02 Contains Duplicate

- two nested loops
  - compare every pair
  - `i != j`
  - `nums[i] == nums[j]`
  - `O(n²)` time
  - `O(1)` space

- sort + one loop
  - compare adjacent
  - `nums[i] == nums[i - 1]`
  - `O(n log n)` time
  - `O(1)` space

- hashmap
  - check before insert
  - exist → return true
  - `O(n)` time
  - `O(n)` space

- hashmap frequency
  - count frequency
  - compare keys length
  - `Object.keys(hashmap).length == nums.length`
  - `O(n)` time
  - `O(n)` space
