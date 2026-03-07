/* #include "hashtable/hashtable.h" */
#include <stdio.h>
#include <stdlib.h>

#define SIZE 10

typedef struct Node {
    int val;
    struct Node *next;
} Node;

typedef struct HashTable {
    Node *entries[SIZE];
} HashTable;

// HASHTABLE

// init
void initialise(HashTable *hashtable) {

    for (int i = 0; i < SIZE; i++) {
        hashtable->entries[i] = NULL;
    }
}

// hash
int hash(int num) {
    int key = num % SIZE;
    return key;
}

// insert
void insert(HashTable *hashtable, int val) {
    int key = hash(val);

    Node *newNode = malloc(sizeof(Node));
    newNode->val = val;
    newNode->next = NULL;

    if (hashtable->entries[key] == NULL) {
        hashtable->entries[key] = newNode;
        return;
    }

    Node *curr = hashtable->entries[key];

    while (curr->next != NULL) {
        curr = curr->next;
    }

    curr->next = newNode;

    return;
}

// delete
void delete(HashTable *hashtable, int val) {
    int key = hash(val);

    // deleting index element
    Node *temp = hashtable->entries[key];

    if (temp == NULL) {
        return;
    }

    if (temp->val == val) {
        hashtable->entries[key] = temp->next;
        free(temp);
        return;
    }

    Node *prev = temp;
    Node *curr = temp->next;

    while (curr != NULL) {

        if (curr->val == val) {
            prev->next = curr->next;
            free(curr);
            return;
        }

        prev = curr;
        curr = curr->next;
    }

    return;
}

// search
// free

int main() {
    HashTable *hashtable = malloc(sizeof(HashTable));

    initialise(hashtable);

    insert(hashtable, 12);
    insert(hashtable, 3);

    printf("%d\n", hashtable->entries[2]->val);

    delete(hashtable, 12);

    if (hashtable->entries[2]) {
        printf("%d\n", hashtable->entries[2]->val);
    }

    free(hashtable);

    return 0;
}
