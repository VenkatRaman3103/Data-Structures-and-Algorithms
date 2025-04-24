from utils.clear import clear

def pattern_27():
    row = 10
    column = 10

    for i in range(row , -1, -1):
        for j in range(column, -1, -1):
            # left half
            if j >= column / 2:
                newJ = round(j - column / 2)
                # top left
                if i  >= row / 2:
                    newI = round(i - row / 2)
                    if newJ >= newI:
                        print(newJ, " ", end="")
                    else:
                        print(newI, " ", end="")
                # bottom left
                if i  < row / 2:
                    newI = round(row / 2 - i)
                    if newJ >= newI:
                        print(newJ, " ", end="")
                    else:
                        print(newI, " ", end="")
            elif j < column /2:
                newJ =  round(column / 2  - j)
                # top left
                if i  >= row / 2:
                    newI = round(i - row / 2)
                    if newJ >= newI:
                        print(newJ, " ", end="")
                    else:
                        print(newI, " ", end="")
                # bottom left
                if i  < row / 2:
                    newI = round(row / 2 - i)
                    if newJ >= newI:
                        print(newJ, " ", end="")
                    else:
                        print(newI, " ", end="")

        if i >= row / 2:
            newI = round(i - row / 2)
            print(" ", newI)
        elif i < row / 2:
            newI = round(row / 2 - i)
            print(" ", newI)



clear()
pattern_27()
