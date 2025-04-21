from utils.clear import clear


def pattern_7():
    row = 5
    column = 5

    for i in range(1, row + 1):
        for j in range(column, 0, -1 ):
            if(j <= i):
                print(j, end="")
            else:
                print(" ", end="")

        print()

clear()
pattern_7()
