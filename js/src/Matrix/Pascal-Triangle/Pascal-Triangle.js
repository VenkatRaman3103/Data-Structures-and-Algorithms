export const generate = (numRows) => {
    const result = [];

    const firstRow = [1];
    result.push(firstRow);

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];

        const currectRow = [1];

        for (let j = 1; j < i; j++) {
            currectRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currectRow.push(1);
        result.push(currectRow);
    }
    return result;
};

const numRows = 5;

const result = generate(numRows);
console.log(result);
//
