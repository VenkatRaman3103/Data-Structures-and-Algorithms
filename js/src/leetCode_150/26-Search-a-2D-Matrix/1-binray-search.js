var searchMatrix = function(matrix, target) {
    //
    let COLUMNS = matrix[0].length - 1

    let t = 0
    let b = matrix.length - 1

    while (t <= b) {
        let m = Math.floor((t + b) / 2)

        if (target < matrix[m][0]) {
            b = m - 1
        } else if (matrix[m][COLUMNS] < target) {
            t = m + 1
        } else {
            break
        }
    }

    if (t > b) {
        return false
    }

    let row = matrix[Math.floor((t + b) / 2)]

    let l = 0
    let r = COLUMNS

    while (l <= r) {
        let m = Math.floor((l + r) / 2)

        if (target > row[m]) {
            l = m + 1
        } else if (target < row[m]) {
            r = m - 1
        } else {
            return true
        }
    }

    return false
};

// const matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60]
// ]
const matrix = [[1]]
const target = 1
const result = searchMatrix(matrix, target)
console.log(result)
