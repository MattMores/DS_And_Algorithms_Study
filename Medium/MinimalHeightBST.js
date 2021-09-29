/* Take in a non-empty sorted array and construct a BST from the integers, returning
the root of the BST. The function should minimize the height of the BST. */

function minHeightBst(array){
    return constructMinHeightBst(array, null, 0, array.length -1);
    }

function constructMinHeightBst(array, bst, startIdx, endIdx){
    if (endIdx < startIdx) return;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    const valueToAdd = array[midIdx];
    if (bst === null){
        bst = new BST(valueToAdd);
    } else {
        bst.insert(valueToAdd)
    }
    constructMinHeightBst(array, bst, startIdx, midIdx -1);
    constructMinHeightBst(array, bst, midIdx + 1, endIdx);
    return bst
}

// function minHeightBst(array){
//     return constructMinHeightBst(array, null, 0, array.length -1)
// }

// function constructMinHeighBst(array, bst, startIdx, endIdx){
//     if (endIdx < startIdx) return;
//     const midIdx = Math.floor((startIdx + endIdx) / 2);
//     const newBstNode = new BST (array[midIdx]);
//     if (bst === null){
//         bst = newBstNode;
//     } else {
//         if (array[midIdx] < bst.value){
//             bst.left = newBstNode;
//             bst = bst.left;
//         } else {
//             bst.right = newBstNode;
//             bst = bst.right;
//         }
//     }
//     constructMinHeightBst(array, bst, startIdx, midIdx -1)
//     constructMinHeightBst(array, bst, midIdx + 1, endIdx)
// }

function minHeightBst(array){
    return constructMinHeightBst(array, 0, array.length -1);
}

constructMinHeightBst(array, startIdx, endIdx){
    if (endIdx < startIdx) return null;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    const bst = new BST(array[midIdx]);
    bst.left = constructMinHeightBst(array, startIdx, midIdx -1);
    bst.right = constructMinHeightBst(array, midIdx +1, endIdx);
    return bst;
}

class BST {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert (value){
        if (value < this.value){
            if(this.left === null){
                this.left = new BST (value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null){
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]))
