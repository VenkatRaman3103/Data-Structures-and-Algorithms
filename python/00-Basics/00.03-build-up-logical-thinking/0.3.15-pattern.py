from utils.clear import clear


def pattern_15():
    row = 5
    column = 5

    chars = ['a', 'b', 'c', 'd', 'e']

    for i in range(0, row ):

        for j in range(0, column):
            if j <= i:
                print(chars[j], end="")
            elif j > i:
                print(" ", end="")

        print(" ", i)


clear()
pattern_15()
