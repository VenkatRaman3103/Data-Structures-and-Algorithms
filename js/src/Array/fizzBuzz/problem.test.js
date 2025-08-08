import { fizzBuzz } from './problem';

describe('fizz buzz', () => {
    it('case 1', () => {
        expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    });
    it('case 2', () => {
        expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    });
    it('case 3', () => {
        expect(fizzBuzz(15)).toEqual([
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
        ]);
    });
});
