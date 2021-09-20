/* Write a funciton that takes a non-empty string and returns a boolean
representing whther the string is a palindrome. i.e. it's written the
same forward and backward. Single character strings ARE palindromes. */

let isPalindrome = function (string) {
    let check = string
    let reverse = ""
    if (string.length === 1) return true
    let newString = string.split("")
    while (newString.length > 0) {
        let letter = newString.pop()
        reverse.push(letter)
    }
    return check === reverse
}

let isPalindrome = function(string) {
    let reversedString = "";
    for(let i = string.length -1; i >= 0; i--){
        reversedString = reversedString + string[i];
    }
    return string === reversedString
}

let isPalindrome = function(string){
    const reversedChars = [];
    for (let i = string.length -1; i>= 0; i--){
        revershedChars.push(string[i]);
    }
    return string === reversedChards.join('');
}

function isPalindrome(string){
    let leftIdx = 0;
    let rightIdx = string.length -1;
    while(leftIdx < rightIdx){
        if(string[leftIdx] !== string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}



console.log(isPalindrome("abcdcba"))
