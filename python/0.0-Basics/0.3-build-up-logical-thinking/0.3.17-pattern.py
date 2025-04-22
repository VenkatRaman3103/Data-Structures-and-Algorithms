from utils.clear import clear


def pattern_17():
    row = 5
    column = 5

    chars = ['a', 'b', 'c', 'd', 'e']

    for i in range(0, row ):
        for j in range(0, column):
            if j <= i:
                print(chars[i], end="")
            elif j > i:
                print(" ", end="")

        print()


clear()
pattern_17()
