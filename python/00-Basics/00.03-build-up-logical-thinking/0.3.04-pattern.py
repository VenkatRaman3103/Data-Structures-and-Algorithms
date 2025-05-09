from utils.clear import clear


def pattern_4():
    row = 5
    column = 5

    for i in range(1, row + 1):
        for j in range(1, i + 1):
            print(i, end="")
        print()

clear()
pattern_4()
