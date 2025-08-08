import { findLengthOfLCIS } from './longest-continuous-increasing-subsequence';

describe('findLengthOfLCIS', () => {
    it('should return 3 for [1, 3, 5, 4, 7]', () => {
        expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
    });

    it('should return 1 for [2, 2, 2, 2, 2]', () => {
        expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
    });

    it('should return 4 for [1, 3, 5, 4, 2, 3, 4, 5]', () => {
        expect(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5])).toBe(4);
    });
});
