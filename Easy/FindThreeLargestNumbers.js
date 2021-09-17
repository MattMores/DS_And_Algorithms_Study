//Write a function that takes in an array of at least three
//integers and returns a sorted array of the largest three integers
//without sorting the initial array.

//Should return duplicates if necessary.

function findThreeLargestNumbers(array){
    const map = new Map([
    ['First', -Infinity],
    ['Second', -Infinity],
    ['Third', -Infinity]
    ]);
    for (const num of array){
        if (num >= map.get('Third')) {
            map.set('First', map.get('Second'))
            map.set('Second', map.get('Third'))
            map.set('Third', num)
        } else if (num >= map.get('Second')) {
            map.set('First', map.get('Second'))
            map.set('Second', num)
        } else if (num >= map.get('First')) {
            map.set('First', num)
        }
    }
    return [map.get('First'), map.get('Second'), map.get('Third')]
}


console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
