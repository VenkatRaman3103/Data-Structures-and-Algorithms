# Data Structures & Algorithms

# PART A: DATA STRUCTURES

## 1. Linear Data Structures

### 1.1 Basics

1. **Arrays** - Index manipulation, traversal, basic operations
2. **Strings** - Character manipulation, basic string operations
3. **Linked Lists** - Node creation, insertion, deletion, traversal
4. **Stacks** - Push, pop, peek operations, LIFO principle
5. **Queues** - Enqueue, dequeue operations, FIFO principle

### 1.2 Intermediate

6. **Deques (Double-ended Queues)** - Both-end operations, circular implementation
7. **Circular Arrays** - Ring buffer implementation
8. **Dynamic Arrays** - Resizable arrays, amortized analysis
9. **Multi-dimensional Arrays** - 2D arrays, matrices
10. **Sparse Arrays** - Memory-efficient storage for sparse data

### 1.3 Advanced

11. **Rope Data Structure** - Efficient string concatenation
12. **Persistent Arrays** - Version control for arrays
13. **Bit Arrays** - Space-efficient boolean storage
14. **Gap Buffer** - Text editor data structure

## 2. Hash-based Data Structures

### 2.1 Basics

15. **Hash Tables/Hash Maps** - Key-value storage, O(1) operations
16. **Hash Sets** - Unique element storage, membership testing
17. **Basic Collision Handling** - Chaining, open addressing

### 2.2 Intermediate

18. **Hash Functions** - Custom hash design, distribution analysis
19. **Load Factor Management** - Dynamic resizing, rehashing
20. **Consistent Hashing** - Distributed systems applications
21. **Robin Hood Hashing** - Variance reduction in probing

### 2.3 Advanced

22. **Bloom Filters** - Probabilistic membership testing
23. **Count-Min Sketch** - Frequency estimation with bounded error
24. **HyperLogLog** - Cardinality estimation for large datasets
25. **Cuckoo Hashing** - Worst-case O(1) lookup guarantee

## 3. Tree Data Structures

### 3.1 Basics

26. **Binary Trees** - Node structure, basic traversals
27. **Binary Search Trees (BST)** - Search, insert, delete operations
28. **Complete Binary Trees** - Heap property, array representation
29. **Tree Properties** - Height, depth, balanced trees

### 3.2 Intermediate

30. **AVL Trees** - Self-balancing BST with rotation operations
31. **Red-Black Trees** - Balanced BST with color properties
32. **Tries (Prefix Trees)** - String prefix operations, autocomplete
33. **Segment Trees** - Range queries with updates
34. **Fenwick Trees (Binary Indexed Trees)** - Efficient prefix sum updates
35. **Interval Trees** - Interval overlap queries

### 3.3 Advanced

36. **B-Trees** - Multi-way trees for database indexing
37. **B+ Trees** - Leaf-linked B-trees for file systems
38. **Treap** - Randomized BST with heap property
39. **Splay Trees** - Self-adjusting BST with amortized efficiency
40. **Suffix Trees** - All substring queries in linear time
41. **Van Emde Boas Trees** - Integer operations with bounded universe
42. **Link-Cut Trees** - Dynamic tree connectivity
43. **Persistent Trees** - Immutable tree versions

## 4. Heap Data Structures

### 4.1 Basics

44. **Min Heap** - Minimum element extraction, heap property
45. **Max Heap** - Maximum element extraction, heap operations
46. **Priority Queues** - Dynamic ordering, scheduling applications
47. **Binary Heap** - Array-based heap implementation

### 4.2 Intermediate

48. **D-ary Heaps** - Generalized heaps with d children
49. **Indexed Priority Queue** - Priority queue with element references
50. **Mergeable Heaps** - Heaps supporting merge operations

### 4.3 Advanced

51. **Binomial Heaps** - Mergeable priority queues
52. **Fibonacci Heaps** - Improved decrease-key operations
53. **Pairing Heaps** - Simple alternative to Fibonacci heaps
54. **Skew Heaps** - Self-adjusting heaps
55. **Leftist Heaps** - Mergeable heaps with shortest path property

## 5. Graph Data Structures

### 5.1 Basics

56. **Adjacency Matrix** - Dense graph representation
57. **Adjacency List** - Sparse graph representation
58. **Edge List** - Simple edge-based representation
59. **Incidence Matrix** - Vertex-edge relationship matrix

### 5.2 Intermediate

60. **Weighted Graphs** - Edge weights, cost representation
61. **Directed Graphs** - One-way edges, asymmetric relationships
62. **Multigraphs** - Multiple edges between vertices
63. **Compressed Sparse Row (CSR)** - Memory-efficient graph storage

### 5.3 Advanced

64. **Graph Databases** - Property graphs, RDF graphs
65. **Hypergraphs** - Edges connecting multiple vertices
66. **Dynamic Graphs** - Time-varying graph structures

## 6. Specialized Data Structures

### 6.1 Basics

67. **Disjoint Set (Union-Find)** - Connectivity queries, set operations
68. **LRU Cache** - Least recently used eviction policy
69. **Stack-based Structures** - Call stack, expression evaluation
70. **Queue-based Structures** - Task scheduling, BFS applications

### 6.2 Intermediate

71. **Skip Lists** - Probabilistic balanced structure
72. **K-D Trees** - Multi-dimensional search trees
73. **Quadtrees** - 2D spatial partitioning
74. **Range Trees** - Multi-dimensional range queries
75. **LFU Cache** - Least frequently used eviction policy

### 6.3 Advanced

76. **Persistent Data Structures** - Immutable versions with sharing
77. **Functional Data Structures** - Purely functional implementations
78. **Octrees** - 3D spatial partitioning
79. **R-Trees** - Spatial indexing for rectangles
80. **Suffix Arrays** - Space-efficient suffix operations

# PART B: ALGORITHMS

## 7. Array & String Algorithms

### 7.1 Basics

81. **Linear Search** - Sequential searching
82. **Binary Search** - Sorted array search, search space reduction
83. **String Matching** - Naive pattern searching
84. **String Manipulation** - Reversal, rotation, anagrams
85. **Palindrome Detection** - Basic palindrome checking

### 7.2 Intermediate

86. **Two Pointers Technique** - Fast/slow pointers, left/right pointers
87. **Sliding Window** - Fixed and variable size windows
88. **Prefix Sums** - Range sum queries, cumulative operations
89. **Array Rotation** - Left/right rotation algorithms
90. **Binary Search Variations** - Search in rotated arrays, range queries
91. **KMP Algorithm** - Linear time pattern matching
92. **Rabin-Karp Algorithm** - Rolling hash pattern matching

### 7.3 Advanced

93. **Monotonic Stack/Queue** - Next greater/smaller element problems
94. **Z Algorithm** - Linear time string matching
95. **Aho-Corasick Algorithm** - Multiple pattern matching
96. **Manacher's Algorithm** - Linear time palindrome detection
97. **Suffix Array Construction** - Linear time suffix array building
98. **Burrows-Wheeler Transform** - Data compression preprocessing

## 8. Sorting Algorithms

### 8.1 Basics

99. **Bubble Sort** - Simple comparison-based sorting
100. **Selection Sort** - Find minimum/maximum iteratively
101. **Insertion Sort** - Build sorted array incrementally

### 8.2 Intermediate

102. **Merge Sort** - Divide and conquer O(n log n) stable sorting
103. **Quick Sort** - In-place O(n log n) average case sorting
104. **Heap Sort** - Heap-based O(n log n) sorting
105. **Quickselect** - Kth order statistics in O(n) average time

### 8.3 Advanced

106. **Counting Sort** - Linear time sorting for bounded ranges
107. **Radix Sort** - Linear time sorting for integers
108. **Bucket Sort** - Distribution-based sorting
109. **External Sorting** - Sorting data larger than memory
110. **Parallel Sorting** - Multi-threaded sorting algorithms

## 9. Graph Algorithms

### 9.1 Basics

111. **Graph Traversal** - BFS and DFS on graphs
112. **Connected Components** - Finding disconnected parts
113. **Cycle Detection** - Basic cycle detection in graphs
114. **Path Finding** - Simple path existence

### 9.2 Intermediate

115. **Topological Sort** - Dependency ordering (Kahn's algorithm, DFS)
116. **Shortest Path** - Dijkstra's algorithm, Bellman-Ford
117. **Minimum Spanning Tree** - Prim's and Kruskal's algorithms
118. **Bipartite Graph Detection** - Two-coloring algorithm
119. **Strongly Connected Components** - Tarjan's and Kosaraju's algorithms

### 9.3 Advanced

120. **All-Pairs Shortest Path** - Floyd-Warshall, Johnson's algorithm
121. **Maximum Flow** - Ford-Fulkerson, Edmonds-Karp algorithms
122. **Min-Cut Max-Flow** - Network flow applications
123. **Bipartite Matching** - Hungarian algorithm, maximum matching
124. **A\* Search Algorithm** - Heuristic-based pathfinding
125. **Bidirectional Search** - Meet-in-the-middle pathfinding
126. **Euler Path/Circuit** - Traversing each edge exactly once
127. **Hamiltonian Path** - Visiting each vertex exactly once

## 10. Tree Algorithms

### 10.1 Basics

128. **Tree Traversal** - DFS variations (in/pre/post-order), BFS/level-order
129. **Tree Height/Depth** - Computing tree dimensions
130. **Lowest Common Ancestor (LCA)** - Basic LCA finding
131. **Tree Diameter** - Longest path in tree

### 10.2 Intermediate

132. **Binary Lifting** - Efficient LCA with preprocessing
133. **Tree DP** - Dynamic programming on trees
134. **Centroid Decomposition** - Tree decomposition technique
135. **Heavy-Light Decomposition** - Tree path queries optimization

### 10.3 Advanced

136. **Link-Cut Tree Operations** - Dynamic tree connectivity
137. **Tree Isomorphism** - Checking if trees have same structure
138. **Tree Hashing** - Unique tree representation

## 11. Dynamic Programming

### 11.1 Basics

139. **Basic DP Patterns** - Fibonacci, climbing stairs, coin change
140. **Memoization** - Top-down approach with caching
141. **Tabulation** - Bottom-up approach with iteration

### 11.2 Intermediate

142. **2D DP** - Grid problems, longest common subsequence
143. **Knapsack Problems** - 0/1 knapsack, unbounded knapsack
144. **Longest Increasing Subsequence** - O(n log n) optimization
145. **Edit Distance** - String transformation problems
146. **Palindrome Problems** - Longest palindromic subsequence/substring

### 11.3 Advanced

147. **DP on Trees** - Tree-based dynamic programming
148. **Digit DP** - Counting numbers with constraints
149. **Bitmask DP** - State compression using bits
150. **Matrix Chain Multiplication** - Optimal parenthesization
151. **DP Optimization** - Convex hull trick, divide and conquer optimization

## 12. Greedy Algorithms

### 12.1 Basics

152. **Activity Selection** - Interval scheduling maximization
153. **Fractional Knapsack** - Greedy vs DP approach
154. **Huffman Coding** - Optimal prefix codes

### 12.2 Intermediate

155. **Job Scheduling** - Deadline-based scheduling
156. **Interval Merging** - Overlapping intervals
157. **Meeting Rooms** - Scheduling conflict resolution
158. **Gas Station Problem** - Circular array greedy

### 12.3 Advanced

159. **Minimum Number of Platforms** - Railway station problem
160. **Stock Buy-Sell** - Multiple transaction optimization
161. **Candy Distribution** - Two-pass greedy algorithm

## 13. Mathematical Algorithms

### 13.1 Basics

162. **GCD and LCM** - Euclidean algorithm
163. **Prime Numbers** - Sieve of Eratosthenes
164. **Basic Modular Arithmetic** - Modular operations

### 13.2 Intermediate

165. **Fast Exponentiation** - Efficient power computation
166. **Matrix Exponentiation** - Solving recurrences
167. **Combinatorics** - Permutations, combinations, Pascal's triangle

### 13.3 Advanced

168. **Chinese Remainder Theorem** - System of congruences
169. **Extended Euclidean Algorithm** - Modular multiplicative inverse
170. **Miller-Rabin Primality Test** - Probabilistic prime testing

## 14. Geometric Algorithms

### 14.1 Basics

171. **Point and Line Operations** - Distance, intersection
172. **Basic Geometric Shapes** - Rectangle, circle operations

### 14.2 Intermediate

173. **Convex Hull** - Graham scan, Jarvis march
174. **Line Sweep Algorithms** - Event-based geometric processing
175. **Closest Pair of Points** - Divide and conquer approach

### 14.3 Advanced

176. **Voronoi Diagrams** - Spatial partitioning
177. **Delaunay Triangulation** - Optimal triangulation
178. **Polygon Triangulation** - Decomposing polygons

## 15. Specialized Algorithms

### 15.1 Basics

179. **Dutch National Flag** - Three-way partitioning
180. **Fisher-Yates Shuffle** - Random array permutation
181. **Reservoir Sampling** - Random sampling from streams

### 15.2 Intermediate

182. **Boyer-Moore Majority Vote** - Finding majority element
183. **Two Heaps Pattern** - Dynamic median finding
184. **K-way Merge** - Merging multiple sorted sequences
185. **Top K Problems** - Finding largest/smallest K elements

### 15.3 Advanced

186. **Mo's Algorithm** - Square root decomposition for queries
187. **Square Root Decomposition** - Block-based query optimization
188. **Persistent Segment Trees** - Historical range queries

## 16. Backtracking & Recursion

### 16.1 Basics

189. **Basic Recursion** - Factorial, Fibonacci, tree traversal
190. **Backtracking Template** - Generate all solutions pattern

### 16.2 Intermediate

191. **N-Queens Problem** - Constraint satisfaction
192. **Sudoku Solver** - Grid-based backtracking
193. **Permutations and Combinations** - Generate all arrangements

### 16.3 Advanced

194. **Graph Coloring** - Chromatic number problems
195. **Hamiltonian Path** - Visit all vertices exactly once
196. **Constraint Satisfaction** - General CSP solving

---

## Study Order Recommendation

### Phase 1: Master the Basics (Weeks 1-6)

**Data Structures**: Focus on sections 1.1, 2.1, 3.1, 4.1, 5.1, 6.1  
**Algorithms**: Focus on sections 7.1, 8.1, 9.1, 10.1, 11.1, 12.1

### Phase 2: Build Intermediate Skills (Weeks 7-14)

**Data Structures**: Work through all .2 intermediate sections  
**Algorithms**: Work through all .2 intermediate sections

### Phase 3: Advanced Mastery (Weeks 15-20)

**Data Structures**: Tackle .3 advanced sections based on target roles  
**Algorithms**: Tackle .3 advanced sections based on target companies

### Practice Strategy

- **Daily**: 2-3 problems alternating between data structures and algorithms
- **Weekly**: Review previous topics to maintain proficiency
- **Bi-weekly**: Mock interviews combining multiple topics from both parts
