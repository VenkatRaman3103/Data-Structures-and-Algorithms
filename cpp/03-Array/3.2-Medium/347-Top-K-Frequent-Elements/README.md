# Top K Frequent Elements

## Intuition

Given an array of integers `nums` and an integer `k`, the problem is to find the k most frequent elements in the array.

## Approach

1. Create a hash table to count the frequency of each element.
2. Iterate through the array and update the frequency count in the hash table.
3. Sort the hash table items based on their frequencies in descending order.
4. Create a sorted array by extracting the keys from the sorted hash table.
5. Return the first k elements from the sorted array.

## Explanation

- Count the frequency of each element using a hash table.
- Sort the hash table items based on frequencies to prioritize the most frequent elements.
- Extract the keys from the sorted hash table to obtain a sorted array.
- Return the first k elements from the sorted array as the result.

```python

def topKFrequent( nums: List[int], k: int) -> List[int]:
    n = len(nums)

    hash_table = {}

    for element in nums:
        if element not in hash_table:
            hash_table[element] = 1
        elif element in hash_table:
            hash_table[element] += 1

    sorted_hash_table = sorted(hash_table.items(), key=lambda x: x[1], reverse=True)

    sorted_arr = []

    for key, val in sorted_hash_table:
        sorted_arr.append(key)

    return sorted_arr[:k]

```

## Time Complexity

- The time complexity is dominated by the sorting step, which is O(n log n), where n is the length of the input array.

## Space Complexity

- The space complexity is O(n) due to the hash table used to store the frequency of each element.
