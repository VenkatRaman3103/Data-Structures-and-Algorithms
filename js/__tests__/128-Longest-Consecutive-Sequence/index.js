import { longestConsecutive } from 'src/leetCode_150/00-Revision/02-revision/08-Valid-Palindrome/1-hashtable';

describe('128. Longest Consecutive Sequence', () => {
    const case_1 = `Example 1:
                Input: nums = [100,4,200,1,3,2]
                Output: 4`;

    const case_2 = `Example 2:
               Input: nums = [0,3,7,2,5,8,4,6,0,1] 
               Output: 9`;

    const case_3 = `Example 3:
               Input: nums = [1,0,1,2] 
               Output: 3`;

    test(case_1, () => {
        const nums = [100, 4, 200, 1, 3, 2];
        const output = 4;
        expect(longestConsecutive(nums)).toBe(output);
    });

    test(case_2, () => {
        const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
        const output = 9;
        expect(longestConsecutive(nums)).toBe(output);
    });

    test(case_3, () => {
        const nums = [1, 0, 1, 2];
        const output = 3;
        expect(longestConsecutive(nums)).toBe(output);
    });
});
