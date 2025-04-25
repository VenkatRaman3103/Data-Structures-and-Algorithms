# Recursive

## 🟢 Easy (1-15)

### 1. Print numbers from 1 to N

**Problem**: Write a recursive function to print all numbers from 1 to N.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
1
2
3
4
5
```

**Sample Input 2**: `N = 8`  
**Expected Output 2**:

```
1
2
3
4
5
6
7
8
```

### 2. Print numbers from N to 1

**Problem**: Write a recursive function to print all numbers from N down to 1.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
5
4
3
2
1
```

**Sample Input 2**: `N = 7`  
**Expected Output 2**:

```
7
6
5
4
3
2
1
```

### 3. Print a triangle of stars (left-aligned)

**Problem**: Using recursion, print a left-aligned triangle of stars with N rows.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
*
**
***
****
```

**Sample Input 2**: `N = 6`  
**Expected Output 2**:

```
*
**
***
****
*****
******
```

### 4. Reverse a triangle of stars

**Problem**: Using recursion, print a left-aligned triangle of stars in reverse order.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
****
***
**
*
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
*****
****
***
**
*
```

### 5. Triangle of numbers (1 to i)

**Problem**: Using recursion, print a left-aligned triangle where each row i contains numbers 1 to i.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
1
1 2
1 2 3
1 2 3 4
```

**Sample Input 2**: `N = 6`  
**Expected Output 2**:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
```

### 6. Reverse triangle of numbers

**Problem**: Using recursion, print a left-aligned triangle of numbers in reverse order.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
1 2 3 4
1 2 3
1 2
1
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

### 7. Right-aligned triangle of stars

**Problem**: Using recursion, print a right-aligned triangle of stars with N rows.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
   *
  **
 ***
****
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
    *
   **
  ***
 ****
*****
```

### 8. Sum of first N numbers using recursion

**Problem**: Write a recursive function to find the sum of first N natural numbers and print the calculation steps.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
Calculating sum(5)
5 + sum(4)
5 + (4 + sum(3))
5 + (4 + (3 + sum(2)))
5 + (4 + (3 + (2 + sum(1))))
5 + (4 + (3 + (2 + 1)))
Sum of first 5 numbers: 15
```

**Sample Input 2**: `N = 7`  
**Expected Output 2**:

```
Calculating sum(7)
7 + sum(6)
7 + (6 + sum(5))
7 + (6 + (5 + sum(4)))
7 + (6 + (5 + (4 + sum(3))))
7 + (6 + (5 + (4 + (3 + sum(2)))))
7 + (6 + (5 + (4 + (3 + (2 + sum(1))))))
7 + (6 + (5 + (4 + (3 + (2 + 1)))))
Sum of first 7 numbers: 28
```

### 9. Fibonacci pattern

**Problem**: Using recursion, print the first N Fibonacci numbers.

**Sample Input 1**: `N = 8`  
**Expected Output 1**:

```
0 1 1 2 3 5 8 13
```

**Sample Input 2**: `N = 10`  
**Expected Output 2**:

```
0 1 1 2 3 5 8 13 21 34
```

### 10. Count digits of a number using recursion

**Problem**: Write a recursive function to count the number of digits in a given number.

**Sample Input 1**: `N = 12345`  
**Expected Output 1**:

```
Number of digits in 12345 is 5
```

**Sample Input 2**: `N = 9876543210`  
**Expected Output 2**:

```
Number of digits in 9876543210 is 10
```

### 11. Print binary representation of a number

**Problem**: Using recursion, print the binary representation of a given decimal number.

**Sample Input 1**: `N = 10`  
**Expected Output 1**:

```
Binary representation of 10 is 1010
```

**Sample Input 2**: `N = 25`  
**Expected Output 2**:

```
Binary representation of 25 is 11001
```

### 12. Print a rectangle pattern of N x M using recursion

**Problem**: Using recursion, print a rectangle pattern of N rows and M columns.

**Sample Input 1**: `N = 3, M = 5`  
**Expected Output 1**:

```
*****
*****
*****
```

**Sample Input 2**: `N = 4, M = 6`  
**Expected Output 2**:

```
******
******
******
******
```

### 13. Print all permutations of a string

**Problem**: Using recursion, print all possible permutations of a given string.

**Sample Input 1**: `str = "ABC"`  
**Expected Output 1**:

```
ABC
ACB
BAC
BCA
CAB
CBA
```

**Sample Input 2**: `str = "ABCD"`  
**Expected Output 2** (first few permutations):

```
ABCD
ABDC
ACBD
ACDB
ADBC
ADCB
...
(24 permutations total)
```

### 14. Reverse a string using recursion

**Problem**: Write a recursive function to reverse a string.

**Sample Input 1**: `str = "hello"`  
**Expected Output 1**:

```
Original: hello
Reversed: olleh
```

**Sample Input 2**: `str = "recursion"`  
**Expected Output 2**:

```
Original: recursion
Reversed: noisrucer
```

### 15. Print all subsets (power set) of a string

**Problem**: Using recursion, generate all possible subsets of a given string.

**Sample Input 1**: `str = "abc"`  
**Expected Output 1**:

```
""
"a"
"b"
"c"
"ab"
"ac"
"bc"
"abc"
```

**Sample Input 2**: `str = "abcd"`  
**Expected Output 2**:

```
""
"a"
"b"
"c"
"d"
"ab"
"ac"
"ad"
"bc"
"bd"
"cd"
"abc"
"abd"
"acd"
"bcd"
"abcd"
```

## 🟡 Moderate (16-35)

### 16. Print pyramid of stars (center aligned)

**Problem**: Using recursion, print a pyramid of stars that is center-aligned.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
   *
  ***
 *****
*******
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
    *
   ***
  *****
 *******
*********
```

### 17. Diamond pattern of stars

**Problem**: Using recursion, print a diamond pattern of stars.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
  *
 ***
*****
 ***
  *
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
   *
  ***
 *****
*******
 *****
  ***
   *
```

### 18. Number pyramid (center aligned)

**Problem**: Using recursion, print a pyramid of numbers that is center-aligned.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
   1
  232
 34543
4567654
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
    1
   232
  34543
 4567654
567898765
```

### 19. Floyd's triangle

**Problem**: Using recursion, print Floyd's triangle up to N rows.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
1
2 3
4 5 6
7 8 9 10
```

### 20. Pascal's triangle using recursion

**Problem**: Using recursion, print Pascal's triangle up to N rows.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

**Sample Input 2**: `N = 6`  
**Expected Output 2**:

```
     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1
1 5 10 10 5 1
```

### 21. Zig-zag number pattern

**Problem**: Using recursion, print a zig-zag pattern of numbers.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
  1
 2 3
4   5
 6 7
  8
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
   1
  2 3
 4   5
6     7
 8   9
  10 11
   12
```

### 22. Hollow square

**Problem**: Using recursion, print a hollow square pattern of stars.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
****
*  *
*  *
****
```

**Sample Input 2**: `N = 6`  
**Expected Output 2**:

```
******
*    *
*    *
*    *
*    *
******
```

### 23. Hollow triangle

**Problem**: Using recursion, print a hollow triangle pattern of stars.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
*
**
* *
*  *
*****
```

**Sample Input 2**: `N = 7`  
**Expected Output 2**:

```
*
**
* *
*  *
*   *
*    *
*******
```

### 24. Hollow pyramid

**Problem**: Using recursion, print a hollow pyramid pattern.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
   *
  * *
 *   *
*******
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
    *
   * *
  *   *
 *     *
*********
```

### 25. Hourglass star pattern

**Problem**: Using recursion, print an hourglass pattern of stars.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
*******
 *****
  ***
   *
  ***
 *****
*******
```

### 26. Mirror number triangle

**Problem**: Using recursion, print a mirror image of a number triangle.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
1      1
12    21
123  321
12344321
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
1        1
12      21
123    321
1234  4321
1234554321
```

### 27. Spiral pattern using recursion

**Problem**: Using recursion, print numbers in a spiral pattern.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
1 2 3
8 9 4
7 6 5
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
1  2  3  4
12 13 14 5
11 16 15 6
10 9  8  7
```

### 28. Print chessboard pattern recursively

**Problem**: Using recursion, print a chessboard pattern with alternating characters.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
* *
 * *
* *
 * *
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
* * *
 * *
* * *
 * *
* * *
```

### 29. Alternate 1-0 triangle pattern

**Problem**: Using recursion, print a triangle with alternating 1s and 0s.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
1
01
101
0101
10101
```

**Sample Input 2**: `N = 6`  
**Expected Output 2**:

```
1
01
101
0101
10101
010101
```

### 30. Snake-like pattern of numbers

**Problem**: Using recursion, print numbers in a snake-like pattern.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
1  2  3  4
8  7  6  5
9  10 11 12
16 15 14 13
```

**Sample Input 2**: `N = 3`  
**Expected Output 2**:

```
1 2 3
6 5 4
7 8 9
```

### 31. Inverted number triangle

**Problem**: Using recursion, print an inverted triangle of numbers.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
1 2 3 4 5
 2 3 4 5
  3 4 5
   4 5
    5
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
1 2 3 4
 2 3 4
  3 4
   4
```

### 32. Left-aligned triangle using backtracking

**Problem**: Using recursive backtracking, print a left-aligned triangle.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
*
**
***
****
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
*
**
***
****
*****
```

### 33. Diagonal pattern using recursion

**Problem**: Using recursion, print a diagonal pattern of stars.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
*
 *
  *
   *
    *
```

**Sample Input 2**: `N = 6`  
**Expected Output 2**:

```
*
 *
  *
   *
    *
     *
```

### 34. Binary triangle (rows alternate 0s and 1s)

**Problem**: Using recursion, print a triangle where rows alternate between 0s and 1s.

**Sample Input 1**: `N = 5`  
**Expected Output 1**:

```
1
00
111
0000
11111
```

**Sample Input 2**: `N = 6`  
**Expected Output 2**:

```
1
00
111
0000
11111
000000
```

### 35. Spiral matrix filling with numbers using recursion

**Problem**: Using recursion, fill a matrix with numbers in a spiral order.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
1 2 3
8 9 4
7 6 5
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
1  2  3  4
12 13 14 5
11 16 15 6
10 9  8  7
```

## 🔴 Hard (36-50)

### 36. Recursive pattern to simulate Sierpinski triangle

**Problem**: Using recursion, print a pattern that resembles the Sierpinski triangle.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
*
* *
*   *
* * * *
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
*
* *
*   *
* * * *
*       *
* *     * *
*   *   *   *
* * * * * * * *
```

### 37. Fractal square pattern

**Problem**: Using recursion, print a fractal pattern of squares.

**Sample Input 1**: `N = 2`  
**Expected Output 1**:

```
*****
*   *
* * *
* * *
*****
```

**Sample Input 2**: `N = 3`  
**Expected Output 2**:

```
*********
*       *
* ***** *
* *   * *
* * * * *
* *   * *
* ***** *
*       *
*********
```

### 38. Recursive hourglass number pattern

**Problem**: Using recursion, print an hourglass pattern with numbers.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
1234321
 12321
  121
   1
  121
 12321
1234321
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
123454321
 1234321
  12321
   121
    1
   121
  12321
 1234321
123454321
```

### 39. Recursive triangle with alternating stars and numbers

**Problem**: Using recursion, print a triangle with alternating rows of stars and numbers.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
*
1 2
* * *
1 2 3 4
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
*
1 2
* * *
1 2 3 4
* * * * *
```

### 40. Print patterns using recursive backtracking (like N-Queens board output)

**Problem**: Using recursive backtracking, print the chessboard configuration for the N-Queens problem.

**Sample Input 1**: `N = 4`  
**Expected Output 1** (one possible solution):

```
. Q . .
. . . Q
Q . . .
. . Q .
```

**Sample Input 2**: `N = 8`  
**Expected Output 2** (one possible solution):

```
Q . . . . . . .
. . . . Q . . .
. . . . . . . Q
. . . . . Q . .
. . Q . . . . .
. . . . . . Q .
. Q . . . . . .
. . . Q . . . .
```

### 41. Hilbert Curve pattern (representation via recursion)

**Problem**: Using recursion, print a simplified representation of a Hilbert Curve.

**Sample Input 1**: `N = 2`  
**Expected Output 1**:

```
┌─┐
│ │
└─┘
```

**Sample Input 2**: `N = 3`  
**Expected Output 2**:

```
┌─┬─┐
│ │ │
├─┼─┤
│ │ │
└─┴─┘
```

### 42. Concentric square pattern with recursion

**Problem**: Using recursion, print a pattern of concentric squares.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
*****
*   *
* * *
*   *
*****
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
*******
*     *
* *** *
* * * *
* *** *
*     *
*******
```

### 43. Recursive triangle wave pattern

**Problem**: Using recursion, print a triangle wave pattern.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
  *
 ***
*****
 ***
  *
 ***
*****
 ***
  *
```

**Sample Input 2**: `N = 2`  
**Expected Output 2**:

```
 *
***
 *
***
 *
```

### 44. Symmetric pattern of numbers

**Problem**: Using recursion, print a symmetric pattern of numbers.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
1      1
12    21
123  321
12344321
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
1        1
12      21
123    321
1234  4321
1234554321
```

### 45. Recursively generate pyramid of Pascal's triangle with center alignment

**Problem**: Using recursion, print a pyramid pattern of Pascal's triangle.

**Sample Input 1**: `N = 4`  
**Expected Output 1**:

```
   1
  1 1
 1 2 1
1 3 3 1
```

**Sample Input 2**: `N = 5`  
**Expected Output 2**:

```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

### 46. Box inside box pattern using recursion

**Problem**: Using recursion, print a pattern of boxes inside boxes.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
*****
*   *
* * *
*   *
*****
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
*******
*     *
* *** *
* * * *
* *** *
*     *
*******
```

### 47. Recursive butterfly pattern

**Problem**: Using recursion, print a butterfly pattern.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
*     *
**   **
*** ***
*******
*** ***
**   **
*     *
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
*       *
**     **
***   ***
**** ****
*********
**** ****
***   ***
**     **
*       *
```

### 48. Alphabet diamond pattern recursively

**Problem**: Using recursion, print a diamond pattern using alphabets.

**Sample Input 1**: `N = 3` (represents 'C')  
**Expected Output 1**:

```
  A
 B B
C   C
 B B
  A
```

**Sample Input 2**: `N = 5` (represents 'E')  
**Expected Output 2**:

```
    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A
```

### 49. Recursive tree structure pattern

**Problem**: Using recursion, print a pattern that resembles a binary tree.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
    *
   / \
  *   *
 / \ / \
*   *   *
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
       *
      / \
     /   \
    /     \
   *       *
  / \     / \
 /   \   /   \
*     * *     *
```

### 50. Recursive mandala-like star/numbers pattern

**Problem**: Using recursion, print a mandala-like pattern with stars and numbers.

**Sample Input 1**: `N = 3`  
**Expected Output 1**:

```
  *
 123
* * *
 321
  *
```

**Sample Input 2**: `N = 4`  
**Expected Output 2**:

```
   *
  123
 * * *
1234321
 * * *
  321
   *
```
