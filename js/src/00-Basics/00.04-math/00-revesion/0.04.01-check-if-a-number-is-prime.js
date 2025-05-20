function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
const num = 11;
const result = isPrime(num);
console.log(result);
