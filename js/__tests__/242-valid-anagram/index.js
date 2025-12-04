import { isAnagram } from '@revision/02-Valid-Anagram/2-hashtable';

describe('242. Valid Anagram', () => {
    test('Case 1: s = "anagram", t = "nagaram"  |-> true', () => {
        const s = 'anagram';
        const t = 'nagaram';

        expect(isAnagram(s, t)).toBe(true);
    });

    test('Case 2: s = "rat", t = "car"  |-> true', () => {
        const s = 'rat';
        const t = 'car';

        expect(isAnagram(s, t)).toBe(false);
    });
});
