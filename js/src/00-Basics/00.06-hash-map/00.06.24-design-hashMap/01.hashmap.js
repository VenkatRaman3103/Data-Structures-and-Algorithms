var MyHashMap = function () {
    this.hashMap = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.hashMap[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    return this.hashMap.hasOwnProperty(key) ? this.hashMap[key] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    delete this.hashMap[key];
};
