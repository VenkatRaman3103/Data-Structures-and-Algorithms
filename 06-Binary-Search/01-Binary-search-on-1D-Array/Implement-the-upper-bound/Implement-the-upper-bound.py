from typing import *

def implementUpperBound(arr, n, x):
  
    arr.sort()

    start = 0
    end = n - 1
    ans = n

    while start < end:
        mid = (start + end) // 2

        if  x < arr[mid] :
            ans = mid

            end = mid - 1

        elif arr[mid] <= x:
            start = mid + 1

    return ans