#include "hashtable/hashtable.h"
#include <stdio.h>
#include <stdlib.h>

int main() {

    HashTable *hashtable = malloc(sizeof(HashTable));

    initialize(hashtable);
    insert(hashtable, 5);
    insert(hashtable, 6);
    insert(hashtable, 7);
    insert(hashtable, 8);
    insert(hashtable, 9);

    del(hashtable, 8);
    print(hashtable);

    printf("%d\n", search(hashtable, 12));
    insert(hashtable, 12);
    printf("%d\n", search(hashtable, 12));

    freeTable(hashtable);

    return 0;
}
