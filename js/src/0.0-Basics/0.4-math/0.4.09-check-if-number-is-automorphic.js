function getLastDigit(num) {
    return num % 10;
}

function isAutomorphic(num) {
    let squared = num * num;

    console.log(getLastDigit(num) == getLastDigit(squared));
}

console.clear();
isAutomorphic(96);
