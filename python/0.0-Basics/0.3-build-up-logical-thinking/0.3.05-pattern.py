from utils.clear import clear


def pattern_5():
    row = 5
    column = 5

    for i in range(row, 0, -1):
        print("*" * i)


clear()
pattern_5()
