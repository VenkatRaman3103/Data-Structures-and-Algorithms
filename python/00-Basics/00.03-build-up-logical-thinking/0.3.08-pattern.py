from utils.clear import clear


def pattern_8():
    row = 5
    column = 10

    for i in range(row , 0, -1):
        for j in range(1, column):
            if j <= column /2 :
                if j >= i:
                    print("*", end="")
                else:
                    print(" ", end="")
            elif j > column / 2:
                key = column - j
                if key >= i:
                    print("*", end="")
                else:
                    print(" ", end="")
        print()

clear()
pattern_8()
