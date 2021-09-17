function bubbleSort (array) {
    for (let i = array.length -1; i>= 0; i--) {
        let isSorted = true;

        for(let j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j +1]] = [array[j + 1], array[j]];
                isSorted = false;
            }
        }
        if (isSorted) break
    }
    return array;
}

function bubbleSort(array) {
    let swapped = true;

       while(swapped){
           swapped = false;
           for (let i = 0; i < array.length - 1; i++) {
               if(array[i] > array[i + 1]) {
                   swap(array, i, i + 1);
                   swapped = true
               }
           }
       }
       return array;
   }

   function swap(array, idx1, idx2) {
       let temp = array[idx1];
       array[idx1] = array[idx2];
       array[idx2] = temp
   }

   function bubbleSort(array){
       let swapped = true;

       while (swapped){
           swapped = false;
           for (let i = 0; i < array.length; i++){
               if (array[i] > array[i + 1]) {
                    swap(i, i + 1, array)
                    swapped = true
               }
               continue;
           }
       }
       return array
   }

   function swap(idx1, idx2, array){
       let temp = array[idx1]
       array[idx1] = array[idx2]
       array[idx2] = temp
   }

