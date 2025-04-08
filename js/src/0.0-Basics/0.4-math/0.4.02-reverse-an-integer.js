function reverse_an_integer(num) {
    let reversed = 0;

    while (num > 0) {
        let lastNum = num % 10;
        num = Math.floor(num / 10);
        reversed = reversed * 10 + lastNum;
    }

    console.log(reversed);
    return 0;
}

console.clear();
reverse_an_integer(123);
