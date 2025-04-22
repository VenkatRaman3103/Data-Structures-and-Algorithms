from utils.clear import clear


def pattern_12():
    row = 5
    column = 5


    for i in range(1, row+1):
        counter = i
        for j in range(1, column + 1):
            if counter >= 1:
                print(counter % 2, end="")
            elif counter < 1:
                print(" ", end="")

            counter = counter - 1

        print()

clear()
pattern_12()
