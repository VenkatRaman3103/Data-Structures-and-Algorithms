import { groupAnagrams } from 'src/leetCode_150/00-Revision/02-revision/04-Group-Anagram/2-hashtable';

const sortOutput = (arr) =>
    arr
        .map((group) => [...group].sort())
        .sort((a, b) => a[0].localeCompare(b[0]));

describe('49. Group Anagrams', () => {
    const case_1 = `Example 1:
                Input: strs = ["eat","tea","tan","ate","nat","bat"]
                Output: [["bat"],["nat","tan"],["ate","eat","tea"]]`;

    const case_2 = `Example 2:
                Input: strs = [""]
                Output: [[""]]`;

    test(case_1, () => {
        const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
        const output = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

        expect(sortOutput(groupAnagrams(strs))).toEqual(sortOutput(output));
    });

    test(case_2, () => {
        const strs = [''];
        const output = [['']];
        expect(sortOutput(groupAnagrams(strs))).toEqual(sortOutput(output));
    });
});
