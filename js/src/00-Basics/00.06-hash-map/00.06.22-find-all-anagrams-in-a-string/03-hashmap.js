function findAnagrams(s, p) {
    if (s.length < p.length) return [];
    if (s.length === 0 || p.length === 0) return [];

    const result = [];

    const patternMap = {};
    for (const char of p) {
        patternMap[char] = (patternMap[char] || 0) + 1;
    }

    const windowMap = {};

    for (let i = 0; i < p.length; i++) {
        windowMap[s[i]] = (windowMap[s[i]] || 0) + 1;
    }

    if (isAnagram(windowMap, patternMap)) {
        result.push(0);
    }

    for (let i = p.length; i < s.length; i++) {
        windowMap[s[i]] = (windowMap[s[i]] || 0) + 1;

        windowMap[s[i - p.length]] -= 1;

        if (windowMap[s[i - p.length]] === 0) {
            delete windowMap[s[i - p.length]];
        }

        if (isAnagram(windowMap, patternMap)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
}

function isAnagram(windowMap, patternMap) {
    if (Object.keys(windowMap).length !== Object.keys(patternMap).length) {
        return false;
    }

    for (const char in patternMap) {
        if (windowMap[char] !== patternMap[char]) {
            return false;
        }
    }

    return true;
}

const s = 'cbaebabacd';
const p = 'abc';
const result = findAnagrams(s, p);
console.log(result);
