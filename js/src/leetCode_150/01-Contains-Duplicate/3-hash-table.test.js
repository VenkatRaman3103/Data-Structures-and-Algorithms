import { containsDuplicate } from './3-hash-table';

describe('Contains Duplicate - Hash Table Solution', () => {
    test('should return true when array has duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test('should return false when array has no duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test('should return true when duplicates are adjacent', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });

    test('should return false for empty array', () => {
        expect(containsDuplicate([])).toBe(false);
    });

    test('should return false for single element', () => {
        expect(containsDuplicate([1])).toBe(false);
    });

    test('should handle negative numbers', () => {
        expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
    });
});

