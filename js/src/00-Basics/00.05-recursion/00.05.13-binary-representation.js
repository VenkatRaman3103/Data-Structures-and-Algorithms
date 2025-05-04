function calcBinary(num) {
    function binary(bin, positon, num) {
        if (num == 0) {
            return bin;
        }

        const remainder = num % 2;
        bin = bin + remainder * positon;
        positon *= 10;
        num = Math.floor(num / 2);

        return binary(bin, positon, num);
    }

    console.log(binary(0, 1, num));
}

console.clear();
calcBinary(25);
