# Linked List Problems for Practice

## 🟢 Easy (1-20)

### 1. Reverse Linked List

**Problem**: Given the head of a singly linked list, reverse the list, and return the reversed list.
**Sample Input 1**: `head = [1,2,3,4,5]`
**Expected Output 1**: `[5,4,3,2,1]`
**Sample Input 2**: `head = [1,2]`
**Expected Output 2**: `[2,1]`
**Links**: LeetCode: [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

### 2. Middle of the Linked List

**Problem**: Given the head of a singly linked list, return the middle node of the linked list.
**Sample Input 1**: `head = [1,2,3,4,5]`
**Expected Output 1**: `[3,4,5]`
**Sample Input 2**: `head = [1,2,3,4,5,6]`
**Expected Output 2**: `[4,5,6]`
**Links**: LeetCode: [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

### 3. Merge Two Sorted Lists

**Problem**: Merge two sorted linked lists and return it as a sorted list.
**Sample Input 1**: `list1 = [1,2,4], list2 = [1,3,4]`
**Expected Output 1**: `[1,1,2,3,4,4]`
**Sample Input 2**: `list1 = [], list2 = []`
**Expected Output 2**: `[]`
**Links**: LeetCode: [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

### 4. Linked List Cycle

**Problem**: Given head, the head of a linked list, determine if the linked list has a cycle in it.
**Sample Input 1**: `head = [3,2,0,-4], pos = 1`
**Expected Output 1**: `true`
**Sample Input 2**: `head = [1,2], pos = -1`
**Expected Output 2**: `false`
**Links**: LeetCode: [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

### 5. Remove Duplicates from Sorted List

**Problem**: Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
**Sample Input 1**: `head = [1,1,2]`
**Expected Output 1**: `[1,2]`
**Sample Input 2**: `head = [1,1,2,3,3]`
**Expected Output 2**: `[1,2,3]`
**Links**: LeetCode: [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

### 6. Palindrome Linked List

**Problem**: Given the head of a singly linked list, return true if it is a palindrome.
**Sample Input 1**: `head = [1,2,2,1]`
**Expected Output 1**: `true`
**Sample Input 2**: `head = [1,2]`
**Expected Output 2**: `false`
**Links**: LeetCode: [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

### 7. Remove Linked List Elements

**Problem**: Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val.
**Sample Input 1**: `head = [1,2,6,3,4,5,6], val = 6`
**Expected Output 1**: `[1,2,3,4,5]`
**Sample Input 2**: `head = [], val = 1`
**Expected Output 2**: `[]`
**Links**: LeetCode: [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

### 8. Intersection of Two Linked Lists

**Problem**: Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
**Sample Input 1**: `intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]`
**Expected Output 1**: `Intersected at '8'`
**Sample Input 2**: `intersectVal = 0, listA = [2,6,4], listB = [1,5]`
**Expected Output 2**: `No intersection`
**Links**: LeetCode: [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)

### 9. Delete Node in a Linked List

**Problem**: Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list.
**Sample Input 1**: `head = [4,5,1,9], node = 5`
**Expected Output 1**: `[4,1,9]`
**Sample Input 2**: `head = [4,5,1,9], node = 1`
**Expected Output 2**: `[4,5,9]`
**Links**: LeetCode: [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)

### 10. Convert Binary Number in a Linked List to Integer

**Problem**: Given head which is a reference node to a singly-linked list, return the decimal value of the number represented by the linked list.
**Sample Input 1**: `head = [1,0,1]`
**Expected Output 1**: `5`
**Sample Input 2**: `head = [0]`
**Expected Output 2**: `0`
**Links**: LeetCode: [1290. Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

### 11. Find the Duplicate Number

**Problem**: Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
**Sample Input 1**: `nums = [1,3,4,2,2]`
**Expected Output 1**: `2`
**Sample Input 2**: `nums = [3,1,3,4,2]`
**Expected Output 2**: `3`
**Links**: LeetCode: [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

### 12. Remove Nth Node From End of List

**Problem**: Given the head of a linked list, remove the nth node from the end of the list and return its head.
**Sample Input 1**: `head = [1,2,3,4,5], n = 2`
**Expected Output 1**: `[1,2,3,5]`
**Sample Input 2**: `head = [1], n = 1`
**Expected Output 2**: `[]`
**Links**: LeetCode: [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

### 13. Design Linked List

**Problem**: Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
**Sample Input 1**: `MyLinkedList(), addAtHead(1), addAtTail(3), addAtIndex(1,2), get(1), deleteAtIndex(1), get(1)`
**Expected Output 1**: `null, null, null, null, 2, null, 3`
**Sample Input 2**: `MyLinkedList(), addAtHead(7), addAtHead(2), addAtHead(1)`
**Expected Output 2**: `null, null, null, null`
**Links**: LeetCode: [707. Design Linked List](https://leetcode.com/problems/design-linked-list/)

### 14. Swap Nodes in Pairs

**Problem**: Given a linked list, swap every two adjacent nodes and return its head.
**Sample Input 1**: `head = [1,2,3,4]`
**Expected Output 1**: `[2,1,4,3]`
**Sample Input 2**: `head = []`
**Expected Output 2**: `[]`
**Links**: LeetCode: [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

### 15. Add Two Numbers

**Problem**: You are given two non-empty linked lists representing two non-negative integers stored in reverse order.
**Sample Input 1**: `l1 = [2,4,3], l2 = [5,6,4]`
**Expected Output 1**: `[7,0,8]`
**Sample Input 2**: `l1 = [0], l2 = [0]`
**Expected Output 2**: `[0]`
**Links**: LeetCode: [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

### 16. Maximum Twin Sum of a Linked List

**Problem**: In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node.
**Sample Input 1**: `head = [5,4,2,1]`
**Expected Output 1**: `6`
**Sample Input 2**: `head = [4,2,2,3]`
**Expected Output 2**: `7`
**Links**: LeetCode: [2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

### 17. Reverse Linked List II

**Problem**: Given the head of a singly linked list and two integers left and right, reverse the nodes from position left to right.
**Sample Input 1**: `head = [1,2,3,4,5], left = 2, right = 4`
**Expected Output 1**: `[1,4,3,2,5]`
**Sample Input 2**: `head = [5], left = 1, right = 1`
**Expected Output 2**: `[5]`
**Links**: LeetCode: [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

### 18. Rotate List

**Problem**: Given the head of a linked list, rotate the list to the right by k places.
**Sample Input 1**: `head = [1,2,3,4,5], k = 2`
**Expected Output 1**: `[4,5,1,2,3]`
**Sample Input 2**: `head = [0,1,2], k = 4`
**Expected Output 2**: `[2,0,1]`
**Links**: LeetCode: [61. Rotate List](https://leetcode.com/problems/rotate-list/)

### 19. Odd Even Linked List

**Problem**: Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices.
**Sample Input 1**: `head = [1,2,3,4,5]`
**Expected Output 1**: `[1,3,5,2,4]`
**Sample Input 2**: `head = [2,1,3,5,6,4,7]`
**Expected Output 2**: `[2,3,6,7,1,5,4]`
**Links**: LeetCode: [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

### 20. Split Linked List in Parts

**Problem**: Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.
**Sample Input 1**: `head = [1,2,3], k = 5`
**Expected Output 1**: `[[1],[2],[3],[],[]]`
**Sample Input 2**: `head = [1,2,3,4,5,6,7,8,9,10], k = 3`
**Expected Output 2**: `[[1,2,3,4],[5,6,7],[8,9,10]]`
**Links**: LeetCode: [725. Split Linked List in Parts](https://leetcode.com/problems/split-linked-list-in-parts/)

## 🟡 Medium (21-35)

### 21. Copy List with Random Pointer

**Problem**: A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
**Sample Input 1**: `head = [[7,null],[13,0],[11,4],[10,2],[1,0]]`
**Expected Output 1**: `[[7,null],[13,0],[11,4],[10,2],[1,0]]`
**Sample Input 2**: `head = [[1,1],[2,1]]`
**Expected Output 2**: `[[1,1],[2,1]]`
**Links**: LeetCode: [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

### 22. Linked List Cycle II

**Problem**: Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
**Sample Input 1**: `head = [3,2,0,-4], pos = 1`
**Expected Output 1**: `tail connects to node index 1`
**Sample Input 2**: `head = [1,2], pos = 0`
**Expected Output 2**: `tail connects to node index 0`
**Links**: LeetCode: [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

### 23. Remove Duplicates from Sorted List II

**Problem**: Given the head of a sorted linked list, delete all nodes that have duplicate numbers.
**Sample Input 1**: `head = [1,2,3,3,4,4,5]`
**Expected Output 1**: `[1,2,5]`
**Sample Input 2**: `head = [1,1,1,2,3]`
**Expected Output 2**: `[2,3]`
**Links**: LeetCode: [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

### 24. Reorder List

**Problem**: You are given the head of a singly linked-list. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
**Sample Input 1**: `head = [1,2,3,4]`
**Expected Output 1**: `[1,4,2,3]`
**Sample Input 2**: `head = [1,2,3,4,5]`
**Expected Output 2**: `[1,5,2,4,3]`
**Links**: LeetCode: [143. Reorder List](https://leetcode.com/problems/reorder-list/)

### 25. Sort List

**Problem**: Given the head of a linked list, return the list after sorting it in ascending order.
**Sample Input 1**: `head = [4,2,1,3]`
**Expected Output 1**: `[1,2,3,4]`
**Sample Input 2**: `head = [-1,5,3,4,0]`
**Expected Output 2**: `[-1,0,3,4,5]`
**Links**: LeetCode: [148. Sort List](https://leetcode.com/problems/sort-list/)

### 26. Insertion Sort List

**Problem**: Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
**Sample Input 1**: `head = [4,2,1,3]`
**Expected Output 1**: `[1,2,3,4]`
**Sample Input 2**: `head = [-1,5,3,4,0]`
**Expected Output 2**: `[-1,0,3,4,5]`
**Links**: LeetCode: [147. Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)

### 27. Partition List

**Problem**: Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
**Sample Input 1**: `head = [1,4,3,2,5,2], x = 3`
**Expected Output 1**: `[1,2,2,4,3,5]`
**Sample Input 2**: `head = [2,1], x = 2`
**Expected Output 2**: `[1,2]`
**Links**: LeetCode: [86. Partition List](https://leetcode.com/problems/partition-list/)

### 28. Add Two Numbers II

**Problem**: You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first.
**Sample Input 1**: `l1 = [7,2,4,3], l2 = [5,6,4]`
**Expected Output 1**: `[7,8,0,7]`
**Sample Input 2**: `l1 = [2,4,3], l2 = [5,6,4]`
**Expected Output 2**: `[8,0,7]`
**Links**: LeetCode: [445. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)

### 29. Next Greater Node In Linked List

**Problem**: You are given the head of a linked list with n nodes. For each node in the list, find the value of the next greater node.
**Sample Input 1**: `head = [2,1,5]`
**Expected Output 1**: `[5,5,0]`
**Sample Input 2**: `head = [1,7,5,1,9,2,5,1]`
**Expected Output 2**: `[7,9,9,9,0,5,0,0]`
**Links**: LeetCode: [1019. Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/)

### 30. Remove Zero Sum Consecutive Nodes from Linked List

**Problem**: Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
**Sample Input 1**: `head = [1,2,-3,3,1]`
**Expected Output 1**: `[3,1]`
**Sample Input 2**: `head = [1,2,3,-3,4]`
**Expected Output 2**: `[1,2,4]`
**Links**: LeetCode: [1171. Remove Zero Sum Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)

### 31. Swapping Nodes in a Linked List

**Problem**: You are given the head of a linked list, and an integer k. Return the head of the linked list after swapping the kth node from the beginning and the kth node from the end.
**Sample Input 1**: `head = [1,2,3,4,5], k = 2`
**Expected Output 1**: `[1,4,3,2,5]`
**Sample Input 2**: `head = [7,9,6,6,7,8,3,0,9,5], k = 5`
**Expected Output 2**: `[7,9,6,6,8,7,3,0,9,5]`
**Links**: LeetCode: [1721. Swapping Nodes in a Linked List](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/)

### 32. Reverse Nodes in k-Group

**Problem**: Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
**Sample Input 1**: `head = [1,2,3,4,5], k = 2`
**Expected Output 1**: `[2,1,4,3,5]`
**Sample Input 2**: `head = [1,2,3,4,5], k = 3`
**Expected Output 2**: `[3,2,1,4,5]`
**Links**: LeetCode: [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

### 33. Delete the Middle Node of a Linked List

**Problem**: You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
**Sample Input 1**: `head = [1,3,4,7,1,2,6]`
**Expected Output 1**: `[1,3,4,1,2,6]`
**Sample Input 2**: `head = [1,2,3,4]`
**Expected Output 2**: `[1,2,4]`
**Links**: LeetCode: [2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)

### 34. LRU Cache

**Problem**: Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
**Sample Input 1**: `LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2), put(4,4), get(1), get(3), get(4)`
**Expected Output 1**: `null, null, null, 1, null, -1, null, -1, 3, 4`
**Sample Input 2**: `LRUCache(1), put(2,1), get(2)`
**Expected Output 2**: `null, null, 1`
**Links**: LeetCode: [146. LRU Cache](https://leetcode.com/problems/lru-cache/)

### 35. Flatten a Multilevel Doubly Linked List

**Problem**: You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer.
**Sample Input 1**: `head = [1,2,3,7,8,11,9,10,4,5,6]`
**Expected Output 1**: `[1,2,3,7,8,11,9,10,4,5,6]`
**Sample Input 2**: `head = [1,2,null,3]`
**Expected Output 2**: `[1,3,2]`
**Links**: LeetCode: [430. Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)

## 🔴 Hard (36-50)

### 36. Merge k Sorted Lists

**Problem**: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.
**Sample Input 1**: `lists = [[1,4,5],[1,3,4],[2,6]]`
**Expected Output 1**: `[1,1,2,3,4,4,5,6]`
**Sample Input 2**: `lists = []`
**Expected Output 2**: `[]`
**Links**: LeetCode: [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

### 37. Reverse Nodes in Even Length Groups

**Problem**: You are given the head of a linked list. The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form the sequence of the natural numbers.
**Sample Input 1**: `head = [5,2,6,3,9,1,7,3,8,4]`
**Expected Output 1**: `[5,6,2,3,9,1,4,8,3,7]`
**Sample Input 2**: `head = [1,1,0,6]`
**Expected Output 2**: `[1,0,1,6]`
**Links**: LeetCode: [2074. Reverse Nodes in Even Length Groups](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/)

### 38. All O`one Data Structure

**Problem**: Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.
**Sample Input 1**: `AllOne(), inc("hello"), inc("hello"), getMaxKey(), getMinKey(), inc("leet"), getMaxKey(), getMinKey()`
**Expected Output 1**: `null, null, null, "hello", "hello", null, "hello", "leet"`
**Sample Input 2**: `AllOne(), inc("hello"), inc("goodbye"), inc("hello"), inc("hello"), getMaxKey(), inc("leet"), inc("code"), inc("leet"), dec("hello"), dec("hello"), dec("hello"), getMaxKey(), getMinKey()`
**Expected Output 2**: `null, null, null, null, null, "hello", null, null, null, null, null, null, "leet", "code"`
**Links**: LeetCode: [432. All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/)

### 39. Design Browser History

**Problem**: You have a browser of one tab where you start on the homepage and you can visit another url, get back to the previous page, or move forward in the history.
**Sample Input 1**: `BrowserHistory("leetcode.com"), visit("google.com"), visit("facebook.com"), visit("youtube.com"), back(1), back(1), forward(1), visit("linkedin.com"), forward(2), back(2), back(7)`
**Expected Output 1**: `null, null, null, null, "facebook.com", "google.com", "facebook.com", null, "linkedin.com", "google.com", "leetcode.com"`
**Sample Input 2**: `BrowserHistory("esgriv.com"), visit("cgr.com"), back(1), back(1), forward(1), visit("ieud.com"), forward(1), back(1), back(1)`
**Expected Output 2**: `null, null, "esgriv.com", "esgriv.com", "cgr.com", null, "ieud.com", "esgriv.com", "esgriv.com"`
**Links**: LeetCode: [1472. Design Browser History](https://leetcode.com/problems/design-browser-history/)

### 40. Design Skiplist

**Problem**: Design a Skiplist without using any built-in libraries. A skiplist is a data structure that takes O(log(n)) time to add, erase and search.
**Sample Input 1**: `Skiplist(), add(1), add(2), add(3), search(0), add(4), search(1), erase(0), erase(1), search(1)`
**Expected Output 1**: `null, null, null, null, false, null, true, false, true, false`
**Sample Input 2**: `Skiplist(), add(0), add(5), add(2), add(1), search(1), add(2), search(3), erase(0), search(2), erase(1), add(2), search(2)`
**Expected Output 2**: `null, null, null, null, null, true, null, false, true, true, true, null, true`
**Links**: LeetCode: [1206. Design Skiplist](https://leetcode.com/problems/design-skiplist/)

### 41. Design a Stack With Increment Operation

**Problem**: Design a stack which supports the following operations: push, pop, top, increment the bottom k elements of the stack.
**Sample Input 1**: `CustomStack(3), push(1), push(2), pop(), push(2), push(3), push(4), increment(5,100), increment(2,100), pop(), pop(), pop(), pop()`
**Expected Output 1**: `null, null, null, 2, null, null, null, null, null, 103, 202, 201, -1`
**Sample Input 2**: `CustomStack(2), push(34), increment(8,100), pop(), increment(2,100), pop(), increment(6,100), push(13), pop(), push(90), pop()`
**Expected Output 2**: `null, null, null, 134, null, -1, null, null, 13, null, 90`
**Links**: LeetCode: [1381. Design a Stack With Increment Operation](https://leetcode.com/problems/design-a-stack-with-increment-operation/)

### 42. LFU Cache

**Problem**: Design and implement a data structure for a Least Frequently Used (LFU) cache.
**Sample Input 1**: `LFUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2), get(3), put(4,4), get(1), get(3), get(4)`
**Expected Output 1**: `null, null, null, 1, null, -1, 3, null, -1, 3, 4`
**Sample Input 2**: `LFUCache(0), put(0,0), get(0)`
**Expected Output 2**: `null, null, -1`
**Links**: LeetCode: [460. LFU Cache](https://leetcode.com/problems/lfu-cache/)

### 43. Design Memory Allocator

**Problem**: You are given an integer n representing the size of a 0-indexed memory array. All memory units are initially free.
**Sample Input 1**: `Allocator(10), allocate(1,1), allocate(1,2), allocate(1,3), free(2), allocate(3,4), allocate(1,1), allocate(1,1), free(1), allocate(10,2), free(7)`
**Expected Output 1**: `null, 0, 1, 2, 1, 3, 1, 6, 3, -1, 0`
**Sample Input 2**: `Allocator(3), allocate(1,1), allocate(1,2), allocate(1,3), free(2), allocate(2,5)`
**Expected Output 2**: `null, 0, 1, 2, 1, -1`
**Links**: LeetCode: [2502. Design Memory Allocator](https://leetcode.com/problems/design-memory-allocator/)

### 44. My Calendar III

**Problem**: A k-booking happens when k events have some non-empty intersection (i.e., there is some time that is common to all k events.)
**Sample Input 1**: `MyCalendarThree(), book(10,20), book(50,60), book(10,40), book(5,15), book(5,10), book(25,55)`
**Expected Output 1**: `null, 1, 1, 2, 3, 3, 3`
**Sample Input 2**: `MyCalendarThree(), book(24,40), book(43,50), book(27,43), book(5,21), book(30,40), book(14,29), book(3,19), book(3,14), book(25,39), book(6,19)`
**Expected Output 2**: `null, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4`
**Links**: LeetCode: [732. My Calendar III](https://leetcode.com/problems/my-calendar-iii/)

### 45. Design Circular Deque

**Problem**: Design your implementation of the circular double-ended queue (deque).
**Sample Input 1**: `MyCircularDeque(3), insertLast(1), insertLast(2), insertFront(3), insertFront(4), getRear(), isFull(), deleteLast(), insertFront(4), getFront()`
**Expected Output 1**: `null, true, true, true, false, 2, true, true, true, 4`
**Sample Input 2**: `MyCircularDeque(4), insertFront(9), deleteLast(), getRear(), getFront(), getFront(), deleteFront(), insertFront(6), insertLast(5), insertFront(9), getFront(), insertFront(6)`
**Expected Output 2**: `null, true, true, -1, -1, -1, false, true, true, true, 9, true`
**Links**: LeetCode: [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)

### 46. Shortest Subarray with Sum at Least K

**Problem**: Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k.
**Sample Input 1**: `nums = [1], k = 1`
**Expected Output 1**: `1`
**Sample Input 2**: `nums = [1,2], k = 4`
**Expected Output 2**: `-1`
**Links**: LeetCode: [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

### 47. Sliding Window Maximum

**Problem**: You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
**Sample Input 1**: `nums = [1,3,-1,-3,5,3,6,7], k = 3`
**Expected Output 1**: `[3,3,5,5,6,7]`
**Sample Input 2**: `nums = [1], k = 1`
**Expected Output 2**: `[1]`
**Links**: LeetCode: [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

### 48. Maximum Frequency Stack

**Problem**: Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.
**Sample Input 1**: `FreqStack(), push(5), push(7), push(5), push(7), push(4), push(5), pop(), pop(), pop(), pop()`
**Expected Output 1**: `null, null, null, null, null, null, null, 5, 7, 5, 4`
**Sample Input 2**: `FreqStack(), push(4), push(0), push(9), push(3), push(4), push(2), pop(), push(6), pop(), push(1), pop(), pop()`
**Expected Output 2**: `null, null, null, null, null, null, null, 4, null, 2, null, 1, 6`
**Links**: LeetCode: [895. Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/)

### 49. Design Front Middle Back Queue

**Problem**: Design a queue that supports push and pop operations in the front, middle, and back.
**Sample Input 1**: `FrontMiddleBackQueue(), pushFront(1), pushBack(2), pushMiddle(3), pushMiddle(4), popFront(), popMiddle(), popMiddle(), popBack(), popFront()`
**Expected Output 1**: `null, null, null, null, null, 1, 3, 4, 2, -1`
**Sample Input 2**: `FrontMiddleBackQueue(), pushFront(1), pushBack(2), pushFront(3), pushBack(4), popFront(), popBack()`
**Expected Output 2**: `null, null, null, null, null, 3, 4`
**Links**: LeetCode: [1670. Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/)

### 50. Number of Visible People in a Queue

**Problem**: There are n people standing in a queue, and they are numbered from 0 to n - 1 in order from front to back.
**Sample Input 1**: `heights = [10,6,8,5,11,9]`
**Expected Output 1**: `[3,1,2,1,1,0]`
**Sample Input 2**: `heights = [5,1,2,3,10]`
**Expected Output 2**: `[4,1,1,1,0]`
**Links**: LeetCode: [1944. Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/)
