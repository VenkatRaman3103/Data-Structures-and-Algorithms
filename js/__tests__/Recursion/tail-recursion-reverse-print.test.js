import { reversePrint } from 'src/Recursion/12-tail-recursion-reverse-print.js';

describe('Tail Recursion', () => {
    let logSpy;

    beforeEach(() => {
        logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        logSpy.mockRestore();
    });

    it('should print N to 1', () => {
        reversePrint(3);
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy.mock.calls.flat()).toEqual([3, 2, 1]);
    });
});
