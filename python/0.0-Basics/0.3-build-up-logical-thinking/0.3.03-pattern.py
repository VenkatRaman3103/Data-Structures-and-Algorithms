from utils.clear import clear

def pattern_3():
    row = 5
    column = 5

    for i in range(1, row + 1):
        for j in range(1, i):
            print(j, end="")
        print()

clear()
pattern_3()

