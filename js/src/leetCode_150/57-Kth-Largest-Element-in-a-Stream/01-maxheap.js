class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;

        this.heap = [];
    }

    leftInd(ind) {
        return ind * 2 + 1;
    }

    rightInd(ind) {
        return ind * 2 + 2;
    }

    parentInd(ind) {
        return Math.floor((ind - 1) / 2);
    }

    add(val) {
        //
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
