/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let l = 0;
    let r = 0;

    while (r < typed.length) {
        if (l < name.length && name[l] == typed[r]) {
            l++;
            r++;
        } else if (r > 0 && typed[r] == typed[r - 1]) {
            r++;
        } else {
            return false;
        }
    }

    return l == name.length;
};
const name = 'alex';
const typed = 'aaleex';
const result = isLongPressedName(name, typed);
console.log(result);
