import { isPalindrome } from 'src/leetCode_150/00-Revision/02-revision/09-Valid-Palindrome/1-hashtable';

describe('125. Valid Palindrome', () => {
    const case_1 = `Example 1:
                Input: s = "A man, a plan, a canal: Panama"
                Output: true`;

    const case_2 = `Example 2:
                Input: s = "race a car"
                Output: false`;

    const case_3 = `Example 3:
                Input: s = " "
                Output: true`;

    test(case_1, () => {
        const s = 'A man, a plan, a canal: Panama';
        const output = true;
        expect(isPalindrome(s)).toBe(output);
    });

    test(case_2, () => {
        const s = 'race a car';
        const output = false;
        expect(isPalindrome(s)).toBe(output);
    });

    test(case_3, () => {
        const s = ' ';
        const output = true;
        expect(isPalindrome(s)).toBe(output);
    });
});
