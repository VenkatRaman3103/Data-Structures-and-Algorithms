export function numberOfMatches(n) {
    let teams = n;

    let acc = 0;

    while (teams > 1) {
        let mathes = Math.floor(teams / 2);

        teams = teams - mathes;

        console.log(mathes, teams);

        acc += mathes;
    }
    return acc;
}

const n = 14;
const result = numberOfMatches(n);
console.log(result);
