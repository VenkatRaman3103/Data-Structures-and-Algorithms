import { twoSum } from 'src/leetCode_150/00-Revision/02-revision/03-Two-Sum/1-brute-force';

describe('1. Two Sum', () => {
    test('Case 1: nums = [2,7,11,15], target = 9 |-> [0, 1]', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toStrictEqual([0, 1]);
    });

    test('Case 2: nums = [3,2,4], target = 6 |-> [1, 2]', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toStrictEqual([0, 1]);
    });
});
