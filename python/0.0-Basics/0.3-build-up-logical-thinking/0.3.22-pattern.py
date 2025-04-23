from utils.clear import clear

def pattern_22():
    row = 5
    column = 10

    counter = 0

    for i in range(row, 0, -1):
        for j in range(1, column + 1):
            if j <= column / 2:
                if j >= i:
                    counter = counter + 1
                    print(counter, end="")
                elif j < i:
                    print(" ",end="")
            elif j > column / 2:
                key = column - j
                if key >= i:
                    counter = counter - 1
                    print(counter, end="")
                elif key < i:
                    print(" ",end="")

        counter = 0
        print()

clear()
pattern_22()
