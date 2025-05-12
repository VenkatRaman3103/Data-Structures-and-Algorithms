## Algorithm

### Searching and Sorting

1. **Binary Search** - Finding elements in sorted arrays or search spaces
2. **Linear Search** - Examining every element sequentially
3. **Interpolation Search** - For uniformly distributed sorted arrays
4. **Jump Search** - Block-based search for sorted arrays
5. **Exponential Search** - For unbounded/infinite sorted arrays
6. **Quicksort** - Divide and conquer sorting with partitioning
7. **Mergesort** - Divide and conquer sorting with merging
8. **Heapsort** - Selection sort using heap data structure
9. **Insertion Sort** - Build sorted array one item at a time
10. **Selection Sort** - Find minimum and swap repeatedly
11. **Bubble Sort** - Repeatedly swap adjacent elements
12. **Counting Sort** - For sorting with limited range values
13. **Radix Sort** - Sort by processing individual digits/bits
14. **Bucket Sort** - Distribute elements into buckets then sort
15. **Tim Sort** - Hybrid sorting algorithm
16. **Shell Sort** - Generalized insertion sort with diminishing increments
17. **Quickselect** - Finding kth smallest/largest element

### Traversal and Iteration

1. **Breadth-First Search (BFS)** - Level-by-level exploration
2. **Depth-First Search (DFS)** - Deep exploration before backtracking
3. **Bidirectional Search** - BFS from both start and end points
4. **Iterative Deepening DFS** - Progressive depth limit increases
5. **A\* Search** - Informed search with heuristics
6. **Topological Sort** - Ordering based on dependencies
7. **Eulerian Path/Circuit** - Path visiting each edge exactly once
8. **Hamiltonian Path/Circuit** - Path visiting each vertex exactly once

### Optimization Techniques

1. **Greedy Algorithms** - Making locally optimal choices
2. **Dynamic Programming** - Breaking into overlapping subproblems
   - Top-down (Memoization)
   - Bottom-up (Tabulation)
3. **Divide and Conquer** - Breaking into non-overlapping subproblems
4. **Backtracking** - Building solutions incrementally with pruning
5. **Branch and Bound** - Systematic search with pruning
6. **Genetic Algorithms** - Evolutionary optimization techniques
7. **Simulated Annealing** - Probabilistic technique for approximation
8. **Hill Climbing** - Iterative improvement technique

### Array and String Processing

1. **Two Pointers** - Processing with multiple positions simultaneously
2. **Sliding Window** - Processing subarrays/substrings of variable length
3. **Prefix Sums** - Computing range sums efficiently
4. **Suffix Sums** - Computing sums from the end
5. **Dutch National Flag** - Three-way partitioning
6. **Kadane's Algorithm** - Maximum subarray sum
7. **Boyer-Moore Majority Vote** - Finding majority elements
8. **Run-Length Encoding** - Basic string compression
9. **Z Algorithm** - Linear time pattern matching
10. **Manacher's Algorithm** - Linear time palindrome detection
11. **KMP Algorithm** - Pattern matching without backtracking
12. **Rabin-Karp** - Hashing-based string matching
13. **Aho-Corasick** - Multiple pattern string matching
14. **Line Sweep** - Processing events in order

## Specialized Algorithms and Techniques

### Graph Algorithms

1. **Shortest Path Algorithms**
   - Dijkstra's Algorithm - Single source, non-negative weights
   - Bellman-Ford - Single source, handles negative weights
   - Floyd-Warshall - All pairs shortest paths
   - Johnson's Algorithm - All pairs for sparse graphs
2. **Minimum Spanning Tree**
   - Prim's Algorithm - Grows tree one vertex at a time
   - Kruskal's Algorithm - Grows tree one edge at a time
3. **Network Flow**
   - Ford-Fulkerson Method - Finding maximum flow
   - Edmonds-Karp Algorithm - BFS implementation of Ford-Fulkerson
   - Dinic's Algorithm - Faster max flow algorithm
   - Push-Relabel Algorithm - Different approach to max flow
   - Min-Cut Max-Flow Theorem - Flow and cut relationship
4. **Bipartite Matching**
   - Hungarian Algorithm - For assignment problems
   - Hopcroft-Karp Algorithm - Maximum cardinality matching
5. **Strong Connectivity**
   - Tarjan's Algorithm - For strongly connected components
   - Kosaraju's Algorithm - Alternative for SCCs
6. **Cycle Detection**
   - Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
   - Union-Find based detection for undirected graphs
7. **Articulation Points and Bridges** - Finding critical nodes/edges
8. **Lowest Common Ancestor (LCA)** - For hierarchical relationships
   - Binary Lifting technique
   - Tarjan's offline algorithm
9. **Heavy-Light Decomposition** - Path queries on trees
10. **Centroid Decomposition** - Tree querying technique

### Computational Geometry

1. **Convex Hull Algorithms**
   - Graham Scan - Using angle-based sorting
   - Jarvis March (Gift Wrapping) - Iterative point selection
   - Divide and Conquer Hull - Recursive approach
   - Chan's Algorithm - Output sensitive convex hull
2. **Line Intersection** - Finding where lines meet
3. **Point in Polygon** - Ray casting and winding number
4. **Closest Pair of Points** - Divide and conquer approach
5. **Voronoi Diagrams** - Space partitioning based on distance
6. **Delaunay Triangulation** - Maximizing minimum angle
7. **Segment Intersection** - Sweep line approach

### Number Theory and Math

1. **Fast Exponentiation** - Computing powers efficiently
2. **Modular Arithmetic** - For very large numbers
3. **Greatest Common Divisor** - Euclidean Algorithm
4. **Sieve of Eratosthenes** - Prime number generation
5. **Miller-Rabin Primality Test** - Probabilistic prime checking
6. **Chinese Remainder Theorem** - Solving systems of modular equations
7. **Matrix Operations** - Fast multiplication, exponentiation
8. **Fast Fourier Transform** - For polynomial multiplication
9. **Gaussian Elimination** - Solving systems of linear equations

### Randomized Algorithms

1. **Fisher-Yates Shuffle** - Unbiased random permutation
2. **Reservoir Sampling** - Selecting k items from streaming data
3. **Monte Carlo Methods** - Using random sampling for approximation
4. **Las Vegas Algorithms** - Randomized algorithms with correct results
5. **Random Pivot Selection** - In quicksort and quickselect

### Parallel and Distributed Algorithms

1. **Map-Reduce** - Distributed data processing paradigm
2. **Parallel Prefix Sum (Scan)** - Parallel array operations
3. **Parallel Sorting Networks** - For hardware sorting implementation
4. **Consensus Algorithms** - Raft, Paxos for distributed agreement
5. **Gossip Protocols** - For information dissemination
6. **Distributed Hash Tables** - For decentralized key-value stores

### Machine Learning Algorithms

1. **Linear Regression** - For predicting continuous values
2. **Logistic Regression** - For binary classification
3. **Decision Trees** - Tree-based learning models
4. **Random Forests** - Ensemble of decision trees
5. **Support Vector Machines** - For classification with margins
6. **K-Means Clustering** - Unsupervised grouping
7. **KNN (K-Nearest Neighbors)** - Instance-based learning
8. **Principal Component Analysis** - Dimensionality reduction
9. **Gradient Descent** - Optimization technique for learning
10. **Neural Networks** - Deep learning architectures

### Special Purpose Techniques

1. **Two Heaps Pattern** - For median finding problems
2. **Bit Manipulation** - Operations for optimization
3. **Monotonic Stack/Queue** - Next greater/smaller element problems
4. **State Machines** - For parsing sequential inputs
5. **Morris Traversal** - Tree traversal with O(1) space
6. **Meet in the Middle** - Splitting search space in half
7. **Memoization** - Caching results of expensive function calls
8. **Interval Processing** - Merging, scheduling, conflicts
9. **Trie-based techniques** - For autocomplete, spell check
10. **Rolling Hash** - For string algorithms
11. **Sqrt Decomposition** - Breaking arrays into blocks
12. **Mo's Algorithm** - For offline range queries
