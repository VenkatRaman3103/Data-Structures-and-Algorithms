from utils.clear import clear


def pattern_16():
    row = 5
    column = 5

    chars = ['a', 'b', 'c', 'd', 'e']

    for i in range(row - 1, -1, -1):
        for j in range(0, column):
            if j <= i:
                print(chars[j], end="")
            elif j > i:
                print(" ", end="")

        print()

clear()
pattern_16()
