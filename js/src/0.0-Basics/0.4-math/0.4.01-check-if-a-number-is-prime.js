function check_if_number_prime(num) {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

    for (let diviser of numbers) {
        if (num % diviser == 0 && num != diviser) {
            console.log(`${num} is not a prime number`);
            break;
        }
    }

    console.log(`${num} is a prime number`);
}

console.clear();
check_if_number_prime(7);
