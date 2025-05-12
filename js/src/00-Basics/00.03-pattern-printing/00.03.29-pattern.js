function log(value) {
    process.stdout.write(String(value));
}

function parttern(numRows) {
    const result = [];

    const firstRow = [1];
    result.push(firstRow);

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow);
    }

    return result;
}

const numRows = 5;
console.log(parttern(numRows));
