from utils.clear import clear

def pattern_18():
    row = 5
    column = 10

    chars = ['a', 'b', 'c', 'd', 'e']

    for i in range(0, row ):
        for j in range(0, column + 1):
            if j < column / 2:
                if j >= i:
                    print(chars[j], end="")
                elif j < i:
                    print(" ", end="")
            elif j > column / 2:
                key = column - j - 1
                if key >= i:
                    print(chars[key], end="")
                elif key < i:
                    print(" ", end="")

        print()



clear()
pattern_18()
