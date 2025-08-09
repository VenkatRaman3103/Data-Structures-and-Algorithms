export var getRow = function (rowIndex) {
    let prev_arr = [1];

    for (let i = 0; i < rowIndex; i++) {
        const current_arr = Array.from({ length: prev_arr.length + 1 }).fill(0);

        for (let j = 0; j < prev_arr.length; j++) {
            current_arr[j] += prev_arr[j];
            current_arr[j + 1] += prev_arr[j];
        }

        prev_arr = current_arr;
    }

    return prev_arr;
};
