/* Given a string of available characters and a string
representing a document that you need to generate. Determine
if you can generate the document using the available characters.

If you can generate the document reutrn true. If not return false.

Only able to generate the docuement if the frequency of unique
characters in the characters string is greater that or equal to the
frequency of the unique characters in the document string.
*/
function generateDocument(characters, document){
    if (document === "") return true
		let documentMap = new Map();
    for (const letters of document){
        if(!documentMap.has(letters)) documentMap.set(letters, 1)
        else if(documentMap.has(letters)) documentMap.set(letters, documentMap.get(letters) + 1 )
    }
    for (const letters of characters){
        if(documentMap.has(letters)) documentMap.set(letters, documentMap.get(letters) -1)
    }
    for (const value of documentMap.values()){
        console.log(value)
        if (value > 0) return false
    }
    return true
}

console.log(generateDocument("aheaolabbhb", "hello"))
