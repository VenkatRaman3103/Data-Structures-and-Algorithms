import { productExceptSelf } from 'src/leetCode_150/00-Revision/02-revision/06-Product-of-Array-Except-Self/1-brute-force';

describe('347. Top K Frequent Elements', () => {
    const case_1 = `Example 1:
                Input: nums = [1,2,3,4]
                Output: [24,12,8,6]`;

    const case_2 = `Example 2:
               Input: nums = [-1,1,0,-3,3] 
               Output: [0,0,9,0,0]`;

    test(case_1, () => {
        const nums = [1, 2, 3, 4];
        const output = [24, 12, 8, 6];
        expect(productExceptSelf(nums)).toStrictEqual(output);
    });

    test(case_2, () => {
        const nums = [-1, 1, 0, -3, 3];
        const output = [0, 0, 9, 0, 0];
        expect(productExceptSelf(nums)).toStrictEqual(output);
    });
});
