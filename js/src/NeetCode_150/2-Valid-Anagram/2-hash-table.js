/* TIME COMPLEXICITY:
 *
 *  let n1 = length of s
 *  let n2 =  length of t
 *
 *      = O(n1 + n2)
 *      = O(2n)
 *      = O(n)
 */

/* SPACE COMPLEXICITY:
 *
 *  let n1 = table => 26
 *
 *      = O(n)
 *      = O(26)
 *      = O(1)
 *
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let table = Array.from({ length: 26 }).fill(0);

    function getIndex(char) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);

        return index;
    }

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        let s_ind = getIndex(s_char);
        let t_ind = getIndex(t_char);

        table[s_ind]++;
        table[t_ind]--;
    }

    for (let i = 0; i < table.length; i++) {
        let key = table[i];

        if (key != 0) {
            return false;
        }
    }

    return true;
};

const s = 'anagram';
const t = 'nagaram';

const result = isAnagram(s, t);
console.log(result);
