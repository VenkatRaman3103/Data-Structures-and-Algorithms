from utils.clear import clear


def pattern_14():
    row = 5
    column = 5

    counter = 1

    for i in range(1, row + 1):
        for j in range(1, column + 1):
            if j <= i:
                print(counter, " ", end="")
                counter = counter + 1
            elif j > i:
                print(" ", end="")

        print()


clear()
pattern_14()
