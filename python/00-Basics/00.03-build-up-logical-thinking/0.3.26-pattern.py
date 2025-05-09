from utils.clear import clear

def pattern_26():
    row = 10
    column = 10

    for i in range(0, row):
        for j in range(0, column):
            if i == 0 or i == row - 1 or j == 0 or j == column - 1:
                print("*", end="")
            else:
                print(" ",end="")
        print()


clear()
pattern_26()
