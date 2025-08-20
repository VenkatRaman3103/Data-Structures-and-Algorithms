import { reverseVowels } from './probem';

describe('Given a string s, reverse only all the vowels in the string and return it.', () => {
    it('case', () => {
        const s = 'IceCreAm';
        expect(reverseVowels(s)).toBe('AceCreIm');
    });
});
