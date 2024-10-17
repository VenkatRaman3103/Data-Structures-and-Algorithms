from typing import *

def isArmstrong(num):

    checkNum = num

    tempNum = num

    power = 0 

    while num !=0:
        power += 1

        num //=10

    armstrongNum = 0

    while tempNum != 0:

        lastNum = tempNum % 10

        armstrongNum = armstrongNum + lastNum ** power

        tempNum//=10
    
    return armstrongNum == checkNum