function canConstruct(ransomNote, magazine) {
    let arr1 = ransomNote.split('');
    let arr2 = magazine.split('');

    for (let i = 0; i < arr1.length; i++) {
        const char1 = arr1[i];
        let found = false;

        for (let j = 0; j < arr2.length; j++) {
            const char2 = arr2[j];

            if (char1 == char2) {
                const index = arr2.indexOf(char2);
                arr2.splice(index, 1);
                found = true;
            }
        }

        if (!found) return false;
    }
    return true;
}

const ransomNote = 'aa';
const magazine = 'aab';
const result = canConstruct(ransomNote, magazine);
console.log(result);
