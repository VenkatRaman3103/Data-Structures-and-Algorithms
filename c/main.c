#include <stdio.h>
#include <stdlib.h>

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
int delete(HashTable *hashtable, int val) {
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

int main() {

    HashTable *hashtable = malloc(sizeof(HashTable));

    initialize(hashtable);
    insert(hashtable, 5);
    insert(hashtable, 6);
    insert(hashtable, 7);
    insert(hashtable, 8);
    insert(hashtable, 9);

    delete(hashtable, 8);
    print(hashtable);

    printf("%d\n", search(hashtable, 12));
    insert(hashtable, 12);
    printf("%d\n", search(hashtable, 12));

    freeTable(hashtable);

    return 0;
}
