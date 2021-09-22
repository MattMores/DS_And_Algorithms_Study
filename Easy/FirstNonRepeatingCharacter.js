/* Write a funciton that takes in a string of lowercase letters and returns
the index of the string's first non-repeating character. If it doesn't have
any non-repeating characters, return -1 */

// function firstNonRepeatingCharacter(string){
//     for (let idx = 0; idx < string.length; idx++) {
//         let foundDuplicate = false;
//         for (let idx2 = 0; idx < string.length; idx2++){
//             if (string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true
//         }
//         if (!foundDuplicate) return idx;
//     }
// }

function firstNonRepeatingCharacter(string){
    const characterFrequencies = new Map();
    for (const character of string) {
        if (!characterFrequencies.has(character)) characterFrequencies.set(character, 0)
        else if (characterFrequencies.has(character)) characterFrequencies.set(character, (characterFrequencies.get(character) + 1))
        console.log(characterFrequencies)
    }
    for (const [key, values] of characterFrequencies.entries()){
        console.log(key)
        if (values === 0) return string.indexOf(key)
    }
    return -1;
}

console.log(firstNonRepeatingCharacter("abbcdcaf")) // 1
