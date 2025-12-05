import { topKFrequent } from 'src/leetCode_150/00-Revision/02-revision/05-Top-K-Frequent-Elements/3-bucket-sort';

describe('347. Top K Frequent Elements', () => {
    const case_1 = `Example 1:
                Input: nums = [1,1,1,2,2,3], k = 2
                Output: [1,2]`;

    const case_2 = `Example 2:
                Input: nums = [1], k = 1
                Output: [1]`;

    const case_3 = `Example 3:
                Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
                Output: [1,2]`;

    const case_4 = `Example 4:
                Input: nums = [5,3,1,1,1,3,5,73,1], k = 3
                Output: [1,3,5]`;

    test(case_1, () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const k = 2;
        expect(topKFrequent(nums, k)).toStrictEqual([1, 2]);
    });

    test(case_2, () => {
        const nums = [1];
        const k = 1;
        expect(topKFrequent(nums, k)).toStrictEqual([1]);
    });

    test(case_3, () => {
        const nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2];
        const k = 2;
        expect(topKFrequent(nums, k)).toStrictEqual([1, 2]);
    });

    test(case_4, () => {
        const nums = [5, 3, 1, 1, 1, 3, 5, 73, 1];
        const k = 3;
        const output = [1, 3, 5];
        expect(topKFrequent(nums, k)).toStrictEqual(output);
    });
});
