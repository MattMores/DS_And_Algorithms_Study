function isPalindrom(string){
    let start = 0;
    let end = string.length -1;
    while(start < end){
        if (string[start] !== string[end]) return false;
        else if (start === end){
            start ++
            end --
        }
    }
    return true
}
