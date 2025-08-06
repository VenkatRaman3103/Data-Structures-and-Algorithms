import {
    getResultGridFrame,
    largestLocal,
} from './larges-local-values-in-matrix';

it('should convert 4 * 4 matrix to 2 * 2', () => {
    const grid = [
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
    ];

    const assertValue = [
        [0, 0],
        [0, 0],
    ];

    expect(getResultGridFrame(grid)).toEqual(assertValue);
});

it('should convert 5 * 5 matrix to 3 * 3', () => {
    const grid = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ];

    const assertValue = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    expect(getResultGridFrame(grid)).toEqual(assertValue);
});

it('find the largest value in every contiguous 3 x 3 matrix in grid, test 1', () => {
    const grid = [
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
    ];

    const assertValue = [
        [9, 9],
        [8, 6],
    ];

    expect(largestLocal(grid)).toEqual(assertValue);
});

it('find the largest value in every contiguous 3 x 3 matrix in grid, test 2', () => {
    const grid = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ];

    const assertValue = [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
    ];

    expect(largestLocal(grid)).toEqual(assertValue);
});
