import { leftSum } from './problem';

describe('Left Sum', () => {
    it('case: 1', () => {
        const nums = [10, 4, 8, 3];
        expect(leftSum(nums)).toEqual([0, 10, 14, 22]);
    });
});
