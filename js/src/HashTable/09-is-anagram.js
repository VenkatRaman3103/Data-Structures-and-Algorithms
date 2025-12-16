function isAnagram(string_1, string_2) {
    if (string_1.length != string_2.length) {
        return false;
    }

    let table_1 = {};
    let table_2 = {};

    for (let i = 0; i < string_1.length; i++) {
        let a = string_1[i];
        let b = string_2[i];

        table_1[a] = (table_1[a] || 0) + 1;
        table_2[b] = (table_2[b] || 0) + 1;
    }

    for (let key of Object.keys(table_2)) {
        if (table_1[key] != table_2[key]) {
            return false;
        }
    }

    return true;
}

const string_1 = 'listen';
const string_2 = 'silent';

const result = isAnagram(string_1, string_2);
console.log(result);
