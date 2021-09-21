/* Non-empty string and returns its run-length encoding. So AAA becomes
3A. Or AA becomes 2A. However AAAAAAAAAAAA (12 As) can't be 12A because
12A could either be AAAAAAAAAAAAAA or 1AA. So, runs of 10 or more characters
should be encoded in a split fashion; the aforementioned run should be
encoded as "9A3A". */

function runLengthEncoding(string){
    const encodedStringCharacters = [];
    let currentRunLength = 1;

    for (let i = 1; i < string.length; i++){
        const currentCharacter = string[i];
        const previousCharacter  = string[i - 1];

    if (cureentCharacter !== previousCharacter || currentRunLength === 9){
        encodedStringCharacters.push(currentRunLength.toString());
        encodedStringCharacters.push(previousCharacter);
        currentRunLength = 0;
    }
    currentRunLength++;
}
    encodedStringCharacters.push(currentRunLength.toString());
    encodedStringCharacters.push(string[string.length - 1])

    return encodedStringCharacters.join('');
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD')) // 9A4A2B4C2D
