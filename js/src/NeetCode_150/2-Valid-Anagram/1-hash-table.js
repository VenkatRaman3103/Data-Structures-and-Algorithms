/* TIME COMPLEXICITY :
 *
 *  n1 = length of s
 *  n2 = length of t
 *
 *      = O(n1 + n2)
 *      = O(2n)
 *      = O(n)
 *
 * SPACE COMPLEXICITY :
 *
 *  n1 = s_table
 *  n2 = t_table
 *
 *      = O(n1 + n2)
 *      = O(2n)
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    const s_table = {}; // s1
    const t_table = {}; // s2

    function updateTable(table, entry) {
        if (table[entry] == undefined) {
            table[entry] = 1;
        } else {
            table[entry] += 1;
        }
    }

    // n1
    for (let i = 0; i < s.length; i++) {
        let key_s = s[i];
        let key_t = t[i];

        updateTable(s_table, key_s);
        updateTable(t_table, key_t);
    }

    // n2
    for (let i = 0; i < s.length; i++) {
        let key = s[i];

        if (s_table[key] != t_table[key]) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';

const result = isAnagram(s, t);
console.log(result);
