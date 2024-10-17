from typing import *


def factorialNumbers(n: int) -> List[int]:
    arr = []

    Value = 1
    nextValue = 2

    while Value <= n:
        arr.append(Value)
        Value *= nextValue
        nextValue += 1
    
    return arr