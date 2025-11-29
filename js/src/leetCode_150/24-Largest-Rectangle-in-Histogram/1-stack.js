var largestRectangleArea = function(heights) {
    let maxRect = 0

    let stack = [] // [index, height]

    for (let i = 0; i < heights.length; i++) {
        let h = heights[i]

        let start = i

        while (stack.length > 0 && stack[stack.length - 1][1] > h) {
            const [prevIndex, prevHeight] = stack.pop()

            let a = prevHeight * (i - prevIndex)

            maxRect = Math.max(a, maxRect)

            start = prevIndex
        }

        stack.push([start, h])

    }

    for (let [i, h] of stack) {
        let a = h * (heights.length - i)
        maxRect = Math.max(a, maxRect)
    }

    return maxRect

};

const heights = [2, 1, 5, 6, 2, 3]
const result = largestRectangleArea(heights)
console.log(result)
