from utils.clear import clear


def  pattern_10():
    row = 10
    column = 10

    for i in range(0, row + 1):
        for j in range(column, -1, -1):
            if j >= column / 2:
                key = round(j- column / 2  )

                if i < row / 2:
                    if(key <= i):
                        print("*", end="")
                    if(key > i):
                        print(" ", end="")

                if i >= row / 2:
                    if(key <= column - i):
                        print("*", end="")
                    if(key > column - i):
                        print(" ", end="")

            elif j < column / 2:
                key = round(column / 2 - j)

                if i < row / 2:
                    if(key <= i):
                        print("*", end="")
                    if(key > i):
                        print(" ", end="")

                if i >= row / 2:
                    if(key <= column - i):
                        print("*", end="")
                    if(key > column - i):
                        print(" ", end="")

        print()

clear()
pattern_10()
