from typing import *

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
