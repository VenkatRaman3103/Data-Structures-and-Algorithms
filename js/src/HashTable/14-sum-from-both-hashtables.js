function sum(table_1, table_2) {
    let a = new Map(Object.entries(table_1));
    let b = new Map(Object.entries(table_2));

    for (let key of Object.keys(table_1)) {
        if (!b.has(key)) {
            a.delete(key);
        }
    }

    for (let key of Object.keys(table_2)) {
        if (a.has(key)) {
            a.set(String(key), b.get(key) + a.get(key));
        } else {
            b.delete(key);
        }
    }

    return a;
}

const a = { a: 5, b: 7 };
const b = { a: 3, b: 2, c: 4 };

const result = sum(a, b);
console.log(result);
