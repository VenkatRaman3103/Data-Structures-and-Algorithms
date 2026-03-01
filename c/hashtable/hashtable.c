#include "hashtable.h"
#include <stdio.h>
#include <stdlib.h>

// Hashtable
// init
void initialize(HashTable *hashtable) {

    for (int i = 0; i < SIZE; i++) {
        hashtable->entries[i] = NULL;
    }
}

// hash
int hash(int val) { return abs(val) % SIZE; }

// insert
int insert(HashTable *hashtable, int val) {
    Node *newNode = malloc(sizeof(Node));
    if (newNode == NULL) {
        return -1;
    }
    newNode->val = val;
    newNode->next = NULL;

    int index = hash(val);

    if (hashtable->entries[index] == NULL) {
        hashtable->entries[index] = newNode;
    } else {
        Node *curr = hashtable->entries[index];

        while (curr->next != NULL) {
            curr = curr->next;
        }

        curr->next = newNode;
    }

    return 0;
}

// serach
int search(HashTable *hashtable, int val) {

    for (int i = 0; i < SIZE; i++) {
        Node *curr = hashtable->entries[i];

        while (curr) {
            if (curr->val == val) {
                return 1;
            }

            curr = curr->next;
        }
    }

    return 0;
}

// delete
int del(HashTable *hashtable, int val) {
    int index = hash(val);
    Node *curr = hashtable->entries[index];
    Node *prev = NULL;

    if (curr == NULL) {
        return 0;
    }

    if (curr->val == val) {
        hashtable->entries[index] = curr->next;
        free(curr);

        return 1;
    }

    prev = curr;
    curr = curr->next;

    while (curr != NULL) {
        if (curr->val == val) {
            prev->next = curr->next;
            free(curr);
            return 1;
        }

        prev = curr;
        curr = curr->next;
    }

    return 0;
}

// print
void print(HashTable *hashtable) {

    for (int i = 0; i < SIZE; i++) {

        Node *curr = hashtable->entries[i];

        while (curr != NULL) {
            printf("%d ", curr->val);
            curr = curr->next;
        }

        printf("\n");
    }
}

// freeTable
void freeTable(HashTable *hashtable) {

    for (int i = 0; i < SIZE; i++) {

        Node *curr = hashtable->entries[i];

        while (curr != NULL) {
            Node *temp = curr;

            curr = curr->next;

            free(temp);
        }
    }
}
