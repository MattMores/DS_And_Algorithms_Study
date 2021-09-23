/* Given an array of integers and another integer, move all
instances of that integer in the array to the end of the array.

You SHOULD mutate the original array. Don't need to maintain
order of other integers.*/

function moveElementToEnd(array, toMove){
    array.sort((a, b) => a - b)
    let pointer1 = 0
    let pointer2 = -Infinity
    for (let i = 0; i < array.length; i++){
        let number = array[i];
        if (number === toMove) pointer1 = i
        while(number < array[pointer2]){
            let hold = array[pointer2]
            array[pointer2] = number;
            number = hold;
        }
    }
}

function moveElementToEnd(array, toMove){
    let i = 0;
    let j = array.length -1;
    while (i < j){
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i, j, array);
    i++;
    }
    return array;
}

function swap(i, j, array){
    let temp = array[i];
    array[j] = array[i];
    array[i] = temp;
}



console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2) // [1, 3, 2, 2, 2, 2, 2]
