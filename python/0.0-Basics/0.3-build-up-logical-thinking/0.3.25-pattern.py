from utils.clear import clear

def pattern_25():
    row = 10
    column = 10

    for i in range(1, row):
        for j in range(1, column):
            # left half
            if j <= column / 2:
                # top left
                if i <= row / 2:
                    if j <= i:
                        print(j, end="")
                    elif j > i:
                        print(" ", end="")
                # bottom left
                elif i > row / 2:
                    key = row - i
                    if j <= key:
                        print(j, end="")
                    elif j > key:
                        print(" ", end="")

            # right half
            elif j > column / 2:
                newJ = column - j
                # top right
                if i <= row / 2:
                    if newJ <= i :
                        print(newJ, end="")
                    elif newJ > i:
                        print(" ", end="")
                # bottom right
                elif i > row / 2:
                    newI = row - i
                    if newJ <= newI :
                        print(newJ, end="")
                    elif newJ > newI:
                        print(" ", end="")
                

        print()


clear()
pattern_25()
