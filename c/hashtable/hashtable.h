#ifndef HASHTABLE_H
#define HASHTABLE_H

// Hashtable
#define SIZE 5

typedef struct Node {
    int val;
    struct Node *next;
} Node;

typedef struct HashTable {
    Node *entries[SIZE];
} HashTable;

// init
void initialize(HashTable *hashtable);

// hash
int hash(int val);

// insert
int insert(HashTable *hashtable, int val);

// serach
int search(HashTable *hashtable, int val);

// delete
int del(HashTable *hashtable, int val);

// print
void print(HashTable *hashtable);

// freeTable
void freeTable(HashTable *hashtable);

#endif
