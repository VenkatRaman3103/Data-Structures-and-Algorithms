from utils.clear import clear

def pattern_24():
    row = 10
    column = 10

    for i in range(row , -1, -1):
        for j in range(0, column + 1):
            if j <= column / 2:
                if i >= row / 2:
                    key = round(i - row / 2)
                    if j <= key:
                        print(j, end="")
                    elif j > key:
                        print(" ", end="")
                elif i < row / 2:
                    key = round( row / 2  - i)
                    if j <= key:
                        print(j, end="")
                    elif j > key:
                        print(" ", end="")

            elif j > column / 2:
                newJ = column - j

                if i >= row / 2 :
                    newI = round(i - row / 2)
                    if newJ <= newI :
                        print(newJ, end="")
                    elif newJ > newI:
                        print(" ", end="")
                elif i < row / 2:
                    newI = round( row / 2  - i)
                    if newJ <= newI:
                        print(newJ, end="")
                    elif newJ > newI:
                        print(" ", end="")


        print()


clear()
pattern_24()
