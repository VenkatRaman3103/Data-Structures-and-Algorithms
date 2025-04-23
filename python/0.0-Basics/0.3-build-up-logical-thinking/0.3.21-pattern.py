from utils.clear import clear

def pattern_21():
    row = 5
    column = 5

    counter = 1

    for i in range(row, 0, -1):
        for j in range(1, column + 1):
            if j >= i:
                print(counter, end="")
                counter = counter + 1
            elif j < i:
                print(" ", end="")

        counter = 1
        print()

clear()
pattern_21()
