import { getRow } from './problem';

describe("Pascal's Triangle II", () => {
    it('case 1', () => {
        expect(getRow(3)).toEqual([1, 3, 3, 1]);
    });

    it('case 2', () => {
        expect(getRow(0)).toEqual([1]);
    });

    it('case 3', () => {
        expect(getRow(1)).toEqual([1, 1]);
    });
});
