from typing import *


def implementLowerBound(arr, n, x):
   
    arr.sort()

    start = 0
    end = n - 1

    ans = n 

    while start <= end :
        mid = (start + end ) // 2
        
        if arr[mid] <= x:
            ans = mid
            start =  mid + 1

        elif x <= arr[mid] :
            end = mid - 1
    return ans