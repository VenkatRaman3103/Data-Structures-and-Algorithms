function mergeHashTable(table_a, table_b) {
    for (let key of Object.keys(table_b)) {
        if (table_a[key] == undefined) {
            table_a[key] = table_b[key];
        } else {
            table_a[key] += table_b[key];
        }
    }

    return table_a;
}

const table_a = { a: 2, b: 3, c: 12 };
const table_b = { a: 3, c: 4 };
const result = mergeHashTable(table_a, table_b);
console.log(result);
