class TimeMap {
    constructor() {
        this.store = {}
    }

    set(key, value, timestamp) {
        if (this.store[key] == undefined) {
            this.store[key] = []
        }
        this.store[key].push([value, timestamp])
    }

    get(key, timestamp) {
        let res = ""

        let values = this.store[key]

        let l = 0
        let r = values.length - 1

        while (l <= r) {
            let m = Math.floor((l + r) / 2)

            if (values[m][1] <= timestamp) {
                res = values[m][0]
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return res
    }
};

