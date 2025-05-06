// NOTE: valid anagram using iterative method
function validAnagram_iterative(s, t) {
    let chars_s = s.split('');
    let chars_t = t.split('');

    for (let i = 0; i < chars_s.length; i++) {
        let actual = chars_s[i];

        for (let j = 0; j < chars_t.length; j++) {
            let expect = chars_t[j];

            if (actual == expect) {
                let index = chars_t.indexOf(expect);
                chars_t.splice(index, 1);
            }
        }
    }

    return chars_t.length == 0;
}

let s = 'anagram';
let t = 'nagaram';

// console.clear();
// console.log(validAnagram_iterative(s, t));

// NOTE: valid anagram using hash map

function validAnagram_hashmap(s, t) {
    if (s.length != t.length) {
        return false;
    }

    let chars_s = s.split('');
    let chars_t = t.split('');

    let table_s = {};
    let table_t = {};

    for (let i = 0; i < chars_s.length; i++) {
        let s_char = chars_s[i];
        let t_char = chars_t[i];

        if (table_s[s_char] == undefined) {
            table_s[s_char] = 1;
        } else {
            table_s[s_char] += 1;
        }

        if (table_t[t_char] == undefined) {
            table_t[t_char] = 1;
        } else {
            table_t[t_char] += 1;
        }
    }

    for (let i = 0; i < chars_s.length; i++) {
        let key = chars_s[i];

        if (table_t[key] != table_s[key]) {
            return false;
        }
    }
    return true;
}

console.clear();
validAnagram_hashmap(s, t);
