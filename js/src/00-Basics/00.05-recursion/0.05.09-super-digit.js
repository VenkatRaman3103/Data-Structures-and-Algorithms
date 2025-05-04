function sumOfnumber(num) {
    if (num == 1) {
        return 1;
    }

    return num + sumOfnumber(num - 1);
}

console.clear();

const result = sumOfnumber(5);
console.log(result);
