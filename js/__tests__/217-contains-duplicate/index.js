import { containsDuplicate } from '@revision/01-Contains-Duplicate/4-hashtable';

describe('217. Contains Duplicate', () => {
    test('Example 1: [1,2,3,1] -> true', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test('Example 2: [1,2,3,4] -> false', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test('Example 3: [1,1,1,3,3,4,3,2,4,2] -> true', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });

    test('Edge: empty array -> false', () => {
        expect(containsDuplicate([])).toBe(false);
    });

    test('Edge: single element -> false', () => {
        expect(containsDuplicate([1])).toBe(false);
    });
});
