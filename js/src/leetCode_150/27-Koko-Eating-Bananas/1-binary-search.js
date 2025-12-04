var minEatingSpeed = function(piles, h) {
    let n = Math.max(...piles)

    let l = 1
    let r = n

    let res = r

    while (l <= r) {
        let m = Math.floor((l + r) / 2)

        let hrs = 0

        for (let p of piles) {
            hrs += Math.ceil(p / m)
        }

        if (hrs > h) {
            l = m + 1
        } else if (hrs <= h) {
            res = m
            r = m - 1
        }
    }

    return res
};

const piles = [3, 6, 7, 11]
const h = 8
const result = minEatingSpeed(piles, h)
console.log(result)
