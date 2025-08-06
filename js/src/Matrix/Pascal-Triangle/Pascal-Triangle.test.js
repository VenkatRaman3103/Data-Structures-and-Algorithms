import { generate } from './Pascal-Triangle';

it('should form a pascal triangle', () => {
    const numRows = 5;

    const assert = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

    expect(generate(numRows)).toEqual(assert);
});
