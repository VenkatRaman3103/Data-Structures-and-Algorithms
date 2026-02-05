import { rightSum } from './problem';

describe('Left Sum', () => {
    it('case: 1', () => {
        const nums = [10, 4, 8, 3];
        expect(rightSum(nums)).toEqual([15, 11, 3, 0]);
    });
});
