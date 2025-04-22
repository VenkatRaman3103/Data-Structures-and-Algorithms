from utils.clear import clear


def pattern_9():
    row = 5
    column = 10

    for i in range(1, row + 1):
        for j in range(1, column):

            if j <= column / 2:
                if j >= i:
                    print("*", end="")
                elif j < i:
                    print(" ", end="")
            elif j > column / 2:
                key = column - j
                if key >= i:
                    print("*", end="")
                elif key < i:
                    print(" ", end="")

        print(" ",i)

clear()
pattern_9()

