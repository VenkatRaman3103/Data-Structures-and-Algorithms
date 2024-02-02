from typing import *

def mergeAlternately(word1: str, word2: str) -> str:

    l = 0
    r = 0 

    arr = []

    while l < len(word1) and r < len(word2):

        arr.append(word1[l])
        arr.append(word2[r])

        l += 1
        r += 1

    arr.append(word1[l:])
    arr.append(word2[r:])


    return ''.join(arr)