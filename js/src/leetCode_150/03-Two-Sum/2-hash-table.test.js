import { twoSum } from './2-hash-table';

describe('Two Sum - Hash Table Solution', () => {
    test('should find two numbers that add up to target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('should work when target pair is not at the start', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('should work with same number used twice', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test('should handle negative numbers', () => {
        expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });

    test('should work with larger array', () => {
        expect(twoSum([1, 5, 8, 3, 9, 2], 11)).toEqual([1, 4]);
    });
});

