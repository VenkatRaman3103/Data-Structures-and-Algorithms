from typing import *


def implementLowerBound(arr, n, x):
   
    arr.sort()

    start = 0
    end = n - 1

    while start < end :
        mid = (start + end ) // 2

        if arr[mid] >= x:
            return arr[mid]

        elif arr[mid] < x:
            start = mid + 1
        
        elif x < arr[mid]:
            end = mid - 1
    
    return -1