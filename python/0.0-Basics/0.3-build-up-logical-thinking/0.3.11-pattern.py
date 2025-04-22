from utils.clear import clear


def pattern_11():
    row = 10
    column = 5

    for i in range(1, row):
        for j in range(1, column + 1):
            if i <= row / 2:
                if j <= i:
                    print("*", end="")
                elif j > i:
                    print(" ", end="")

            elif i > row / 2:
                key = round(row  - i)
                if j <= key:
                    print("*", end="")
                elif j > key:
                    print(" ", end="")

        print()


clear()
pattern_11()
