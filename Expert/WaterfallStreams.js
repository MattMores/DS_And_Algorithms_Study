function waterfallStreams(array, source){
    let rowAbove = [...array[0]];
    rowAbove[source] = -1;

    for (let row = 1; row < array.length; row++){
        const currentRow = [...array[row]];

        for (let idx = 0; idx < rowAbove.length; idx++){
            const valueAbove = rowAbove[idx];

            const hasWaterAbove = valueAbove < 0;
            const hasBlock = currentRow[idx] === 1;

            if (!hasWaterAbove){
                continue;
            }

            if(!hasBlock){
                currentRow[idx] += valueAbove;
                continue;
            }
            const splitWater = valueAbove / 2;

            let rightIdx = idx;
            while(rightIdx + 1 < rowAbove.length){
                rightIdx++;
                if(rowAbove[rightIdx] === 1){
                    break;
                }
                if (currentRow[rightIdx] !== 1){
                    currentRow[rightIdx] += splitWater;
                    break;
                }
            }
            let leftIdx = idx;
            while (leftIdx -1 >= 0){
                leftIdx--;
                if(rowAbove[leftIdx] === 1){
                    break;
                }
                if (currentRow[leftIdx] !== 1){
                    currentRow[leftIdx] += splitWater;
                    break;
                }
            }
        }
        rowAbove = currentRow;
    }
    const finalPercentages = rowAbove.map(num => (num < 0 ? num * -100 : num));

    return finalPercentages; 
}
