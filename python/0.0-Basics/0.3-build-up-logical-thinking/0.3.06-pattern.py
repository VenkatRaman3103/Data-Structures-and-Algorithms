from utils.clear import clear


def pattern_6():
    row = 5
    column = 5

    for i in range(row, 0, -1):
        for j in range(1, i + 1):
            print(j, end="")
        print()

clear()
pattern_6()
