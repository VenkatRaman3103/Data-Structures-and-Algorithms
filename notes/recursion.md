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

**Links:**

- LeetCode: [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) - Similar recursive structure
- HackerRank: [Recursion: Fibonacci Numbers](https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem) - Basic recursion concept

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

**Links:**

- LeetCode: [344. Reverse String](https://leetcode.com/problems/reverse-string/) - Similar reversal concept
- CodeChef: [RECNDSTR](https://www.codechef.com/problems/RECNDSTR) - Related to reversal patterns

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Similar pattern building approach
- HackerRank: [Staircase](https://www.hackerrank.com/challenges/staircase/problem) - Similar pattern problem
- CodeChef: [TRICOIN](https://www.codechef.com/problems/TRICOIN) - Related triangle pattern concept

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

**Links:**

- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern) - Related patterns
- CodeChef: [PPATTERN](https://www.codechef.com/problems/PPATTERN) - Pattern printing problem

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

**Links:**

- LeetCode: [1441. Build an Array With Stack Operations](https://leetcode.com/problems/build-an-array-with-stack-operations/) - For sequential number concepts
- CodeChef: [PRPATTERN](https://www.codechef.com/problems/PRPATTERN) - Related to number patterns
- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern)

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

**Links:**

- LeetCode: [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/) - Related to row-by-row pattern generation
- HackerRank: [Triangle Numbers](https://www.hackerrank.com/challenges/triangle-numbers/problem) - Similar number pattern

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

**Links:**

- HackerRank: [Staircase](https://www.hackerrank.com/challenges/staircase/problem) - Similar alignment challenge
- CodeChef: [DIFTRIANG](https://www.codechef.com/problems/DIFTRIANG) - Triangle pattern problems

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

**Links:**

- LeetCode: [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) - Similar recursive summation concept
- HackerRank: [Recursive Digit Sum](https://www.hackerrank.com/challenges/recursive-digit-sum/problem) - Advanced recursive sum concept
- CodeChef: [SUMTRIAN](https://www.codechef.com/problems/SUMTRIAN) - Sum-related problem

### Super Digit

**Problem**: Using recursion, super digit
We define super digit of an integer using the following rules:

Given an integer, we need to find the super digit of the integer.

If has only digit, then its super digit is .
Otherwise, the super digit of is equal to the super digit of the sum of the digits of .
For example, the super digit of will be calculated as:

**Sample Input 1**: `N = 9875`  
**Expected Output 1**: 2

```
    super_digit(9875)   	9+8+7+5 = 29
    super_digit(29)           2 + 9 = 11
    super_digit(11)           1 + 1 = 2
    super_digit(2)                  = 2
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

**Links:**

- LeetCode: [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) - Direct Fibonacci implementation
- LeetCode: [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - Fibonacci application
- HackerRank: [Fibonacci Modified](https://www.hackerrank.com/challenges/fibonacci-modified/problem) - Advanced Fibonacci variation

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

**Links:**

- LeetCode: [258. Add Digits](https://leetcode.com/problems/add-digits/) - Related digit manipulation
- HackerRank: [Recursive Digit Sum](https://www.hackerrank.com/challenges/recursive-digit-sum/problem) - Working with digits recursively

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

**Links:**

- LeetCode: [1009. Complement of Base 10 Integer](https://leetcode.com/problems/complement-of-base-10-integer/) - Binary representation manipulation
- LeetCode: [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/) - Related bit manipulation
- HackerRank: [Binary Numbers](https://www.hackerrank.com/challenges/30-binary-numbers/problem) - Binary representation task

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

**Links:**

- LeetCode: [1351. Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) - Matrix traversal concept
- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/printing-pattern-again/challenges/printing-pattern-again) - Pattern printing

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

**Links:**

- LeetCode: [46. Permutations](https://leetcode.com/problems/permutations/) - Direct implementation of permutations
- LeetCode: [47. Permutations II](https://leetcode.com/problems/permutations-ii/) - Permutations with duplicates
- HackerRank: [Recursive Digit Sum](https://www.hackerrank.com/challenges/recursive-digit-sum/problem) - Recursive problem

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

**Links:**

- LeetCode: [344. Reverse String](https://leetcode.com/problems/reverse-string/) - Direct string reversal implementation
- HackerRank: [Recursion: Davis' Staircase](https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem) - Different recursive approach
- CodeChef: [RECNDSTR](https://www.codechef.com/problems/RECNDSTR) - String manipulation

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

**Links:**

- LeetCode: [78. Subsets](https://leetcode.com/problems/subsets/) - Direct implementation of subset generation
- LeetCode: [90. Subsets II](https://leetcode.com/problems/subsets-ii/) - Subsets with duplicates
- HackerRank: [Super Reduced String](https://www.hackerrank.com/challenges/reduced-string/problem) - String manipulation problem

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

**Links:**

- HackerRank: [Staircase](https://www.hackerrank.com/challenges/staircase/problem) - Similar pattern problem
- CodeChef: [PPATTERN](https://www.codechef.com/problems/PPATTERN) - Pattern printing

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Similar expanding-contracting pattern
- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern) - Complex pattern problems

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Similar structured pattern
- CodeChef: [PAT1](https://www.codechef.com/problems/PAT1) - Pattern printing problem

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

**Links:**

- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern) - Includes various pattern problems
- CodeChef: [PPATTERN](https://www.codechef.com/problems/PPATTERN) - Pattern with incremental numbering

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Direct implementation of Pascal's Triangle
- LeetCode: [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/) - Generating specific row
- HackerRank: [Pascal's Triangle](https://www.hackerrank.com/challenges/pascals-triangle/problem) - Similar implementation

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

**Links:**

- LeetCode: [6. Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/) - Related zigzag pattern concept
- CodeChef: [ZIGZAG3](https://www.codechef.com/problems/ZIGZAG3) - Zigzag sequence problem

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

**Links:**

- LeetCode: [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) - Traversal pattern concept
- HackerRank: [Print Pretty](https://www.hackerrank.com/challenges/print-pretty/problem) - Formatting output

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

**Links:**

- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern) - Various pattern problems
- CodeChef: [TRIQUERY](https://www.codechef.com/problems/TRIQUERY) - Triangle based problem

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

**Links:**

- HackerRank: [Staircase](https://www.hackerrank.com/challenges/staircase/problem) - Similar alignment problem
- CodeChef: [PEPPASTA](https://www.codechef.com/problems/PEPPASTA) - Pattern problem

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

**Links:**

- LeetCode: [2373. Largest Local Values in a Matrix](https://leetcode.com/problems/largest-local-values-in-a-matrix/) - Pattern processing
- HackerRank: [2D Array - DS](https://www.hackerrank.com/challenges/2d-array/problem) - Involves hourglass pattern traversal

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Similar structure building approach
- CodeChef: [PATRN002](https://www.codechef.com/problems/PATRN002) - Pattern problems

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

**Links:**

- LeetCode: [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) - Direct implementation of spiral traversal
- LeetCode: [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) - Filling a matrix in spiral order
- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern) - Various pattern problems

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

**Links:**

- LeetCode: [2128. Remove All Ones With Row and Column Flips](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/) - Matrix pattern manipulation
- CodeChef: [CHESSBOARD](https://www.codechef.com/problems/CHESSBOARD) - Chessboard related problem

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

**Links:**

- LeetCode: [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) - Pattern recognition
- CodeChef: [LAPIN](https://www.codechef.com/problems/LAPIN) - Pattern recognition problem

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

**Links:**

- LeetCode: [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) - Similar zigzag traversal
- LeetCode: [1424. Diagonal Traverse II](https://leetcode.com/problems/diagonal-traverse-ii/) - Advanced diagonal traversal
- CodeChef: [SNAKE](https://www.codechef.com/problems/SNAKE) - Snake-like movement

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Similar structure concept
- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern) - Various patterns

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

**Links:**

- LeetCode: [39. Combination Sum](https://leetcode.com/problems/combination-sum/) - Uses backtracking
- LeetCode: [46. Permutations](https://leetcode.com/problems/permutations/) - Backtracking application
- HackerRank: [The Power Sum](https://www.hackerrank.com/challenges/the-power-sum/problem) - Backtracking problem

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

**Links:**

- LeetCode: [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) - Diagonal traversal concept
- CodeChef: [DIAGONL](https://www.codechef.com/problems/DIAGONL) - Diagonal pattern problem

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

**Links:**

- LeetCode: [1680. Concatenation of Consecutive Binary Numbers](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/) - Binary pattern work
- HackerRank: [Print the Pattern](https://www.hackerrank.com/contests/macroscope-2017/challenges/print-the-pattern) - Various patterns

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

**Links:**

- LeetCode: [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) - Direct implementation of spiral traversal
- LeetCode: [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) - Filling a matrix in spiral order
- CodeChef: [SSEC0004](https://www.codechef.com/problems/SSEC0004) - Matrix traversal problem

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Similar fractal-like pattern
- HackerRank: [Fractal Trees](https://www.hackerrank.com/challenges/fractal-trees-all/problem) - Similar fractal pattern

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

**Links:**

- HackerRank: [Fractal Trees](https://www.hackerrank.com/challenges/fractal-trees-all/problem) - Similar fractal concept
- LeetCode: [463. Island Perimeter](https://leetcode.com/problems/island-perimeter/) - Perimeter concept applicable to fractals

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Similar pattern construction logic
- HackerRank: [Printing Pattern](https://www.hackerrank.com/challenges/printing-pattern-2/problem) - Number pattern printing

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

**Links:**

- LeetCode: [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/) - Row generation concept
- HackerRank: [Staircase](https://www.hackerrank.com/challenges/staircase/problem) - Pattern printing technique

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

**Links:**

- LeetCode: [51. N-Queens](https://leetcode.com/problems/n-queens/) - Direct implementation of this problem
- LeetCode: [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/) - Counting solutions variant

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

**Links:**

- LeetCode: [1041. Robot Bounded In Circle](https://leetcode.com/problems/robot-bounded-in-circle/) - Direction and movement patterns
- HackerRank: [Tree: Huffman Decoding](https://www.hackerrank.com/challenges/tree-huffman-decoding/problem) - Recursive traversal concept

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

**Links:**

- LeetCode: [463. Island Perimeter](https://leetcode.com/problems/island-perimeter/) - Perimeter calculation concept
- HackerRank: [Matrix Layer Rotation](https://www.hackerrank.com/challenges/matrix-rotation-algo/problem) - Concentric matrix manipulation

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

**Links:**

- LeetCode: [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) - Similar movement patterns
- HackerRank: [Recursion: Fibonacci Numbers](https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem) - Recursive pattern generation

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

**Links:**

- LeetCode: [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Symmetry concept
- HackerRank: [Print Pretty](https://www.hackerrank.com/challenges/prettyprint/problem) - Formatting output

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

**Links:**

- LeetCode: [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - Direct implementation
- LeetCode: [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/) - Row generation
- HackerRank: [Divisible Sum Pairs](https://www.hackerrank.com/challenges/divisible-sum-pairs/problem) - Pair calculation concept

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

**Links:**

- LeetCode: [733. Flood Fill](https://leetcode.com/problems/flood-fill/) - Region filling concept
- HackerRank: [Matrix Layer Rotation](https://www.hackerrank.com/challenges/matrix-rotation-algo/problem) - Nested patterns

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

**Links:**

- LeetCode: [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) - Matrix traversal patterns
- HackerRank: [Print the Elements of a Linked List](https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem) - Sequential pattern printing

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

**Links:**

- LeetCode: [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) - Symmetric pattern generation concept
- HackerRank: [Alternating Characters](https://www.hackerrank.com/challenges/alternating-characters/problem) - Character pattern manipulation

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

**Links:**

- LeetCode: [297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) - Tree traversal concept
- LeetCode: [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Tree depth calculation
- HackerRank: [Binary Search Tree: Lowest Common Ancestor](https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem) - Tree navigation

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

**Links:**

- LeetCode: [1222. Queens That Can Attack the King](https://leetcode.com/problems/queens-that-can-attack-the-king/) - Directional pattern concept
- HackerRank: [Recursive Digit Sum](https://www.hackerrank.com/challenges/recursive-digit-sum/problem) - Recursive numerical patterns
