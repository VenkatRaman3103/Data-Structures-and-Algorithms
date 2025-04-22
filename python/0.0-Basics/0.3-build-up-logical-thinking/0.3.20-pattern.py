from utils.clear import clear

def pattern_20():
    row = 5
    column = 10

    chars = ['a', 'b', 'c', 'd', 'e']

    for i in range(0, row ):
        for j in range(1, column):
            if j <= column / 2:
                key = round(column / 2 - j) 
                if key <= i:
                    print(chars[key], end="")
                elif key > i:
                    print(" ", end="")

            if j > column / 2:
                key = round(j - column / 2)
                if key <= i:
                    print(chars[key], end="")
                elif key > i:
                    print(" ", end="")

        print()


clear()
pattern_20()
