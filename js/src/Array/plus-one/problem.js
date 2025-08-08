export const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        let key = digits[i];

        if (key < 9) {
            digits[i] += 1;
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4];

const results = plusOne(digits);
console.log(results);
