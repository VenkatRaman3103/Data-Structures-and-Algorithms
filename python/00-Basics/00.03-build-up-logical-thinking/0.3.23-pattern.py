from utils.clear import clear

def pattern_23():
    row = 5
    column = 5

    chars = ['a', 'b', 'c', 'd', 'e']

    for i in range(row, 0, -1):
        counter = i - 1
        for j in range(column, 0, -1):
            if j >= i:
                print(chars[counter], end="")
                counter = counter + 1
            elif j <  i:
                print(" ", end="")

        print(" ", i)

clear()
pattern_23()
