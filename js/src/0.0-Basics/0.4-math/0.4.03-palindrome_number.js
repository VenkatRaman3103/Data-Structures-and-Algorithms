function palindrome_number(num) {
    if (Math.floor(num / 10) == 0) {
        console.log(`${num} is a palindrome`);
        return 0;
    }

    let givenNum = num;

    let revered = 0;

    while (num > 0) {
        let lastNum = num % 10;
        num = Math.floor(num / 10);

        revered = revered * 10 + lastNum;
    }

    if (givenNum == revered) {
        console.log(`${givenNum} is a palindrome`);
    } else {
        console.log(`${givenNum} is not a palindrome`);
    }

    return 0;
}

console.clear();
palindrome_number(123321);
