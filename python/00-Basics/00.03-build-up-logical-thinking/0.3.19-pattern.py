from utils.clear import clear

def pattern_19():
    row = 5
    column = 10

    chars = ['a', 'b', 'c', 'd', 'e']

    for i in range(row, 0, -1):
        for j in range(1, column ):
            if j <= column / 2:
                if j >= i:
                    print(chars[j-1], end="")
                elif j < i:
                    print(" ", end="")

            elif j > column / 2:
                key = column - j
                if key >= i:
                    print(chars[key-1], end="")
                elif key < i:
                    print(" ", end="")

        print()



clear()
pattern_19()
