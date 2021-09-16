//Takes a special array and returns its product sum.
//Special array = non-empty array that contains integers or other spcial array.
//Product sum = sum of it selements, where special arrays are summed themelves
// and then multiplied by their leve of depth.
// [] = 1 / [][][] = 3


function productSum(array, multiplier = 1) {
    let sum = 0;
    for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    }
    return sum * multiplier;
}

function productSum(array, multiplier = 1) {
    sum = 0;
    for (element of array) {
    if (Array.isArray(element)) {
        sum += productSum(element, multiplier + 1)
    }
    else (sum += element)
    }
    return sum * multiplier
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))
// 12 (5 + 2 + 2(7 -1) + 3 + 2 * (6 +3 * (-13 + 8) + 4))
