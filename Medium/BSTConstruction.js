/* Write a BST that inserts values w/ insert method,
removes values with the remove method, search for values
with the contains method.

Calling the remove value from a single-node tree should
do nothing.

Each BST node has an integer value, a left child node and a right
child node.
*/

// const { contains } = require("sequelize/types/lib/operators");

// class BST {
//     constructor(value){
//         this.value = value
//         this.left = null;
//         this.right = null;
//     }

//     insert(value){
//         let currentNode = this;
//         while(true){
//             if(value < currentNode.value) {
//                 if(currentNode.left === null){
//                     currentNode.left = new BST(value);
//                     break;
//                 } else {
//                     currentNode = currentNode.left
//                 }
//             } else {
//                 if(value > currentNode.value){
//                     if(currentNode.right === null){
//                         currentNode.right = new BST(value);
//                         break;
//                     } else {
//                         currentNode = currentNode.right;
//                     }
//                 }
//         }
//         return this
//     }

//     contains(value) {
//         let currentNode = this;
//         while (currentNode !== null) {
//             if (value < currentNode.value){
//                 currentNode = currentNode.left;
//             } else if (value > currentNode.value){
//                 currentNode = currentNode.right;
//             } else {
//                 return true;
//             }
//     }
//     return false;
//     }
//     insert (value){
//         if (value < this.value){
//             if(this.left === null){
//                 this.left = new BST(value);
//             } else {
//                 this.left.insert(value)
//             }
//         } else {
//             if (this.right === null){
//                 this.right = new BST(value);
//             } else {
//                 this.right.insert(value);
//             }
//         }
//     }
//     return this;
// }

// cotains(value){
//     if (value < this.value) {
//         if (this.left === null){
//             return false;
//         } else {
//             return this.left.contains(value);
//         }
//     } else if (value > this.value){
//         if (this.rigth === null){
//             return false
//         }else {
//             return this.right.contains(value)
//         }
//     } else {return true }
// }

// class BST {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
//     insert(value){
//         if (value < this.value){
//             if(this.left === null){
//                 this.left = new BST(value);
//             } else {
//                 this.left.insert(value)
//             }
//         } else {
//             if (this.right === null) {
//                 this.right = new BST(value);
//             } else {
//                 this.right.value.insert(value)
//             }
//         }
//         return this;
//     }
// }

// contains(value){
//     if (value < this.value){
//         if (this.left === null){
//             return false
//         } else {
//             return this.left.contains(value);
//         }
//     } else if (value > this.value){
//         if (this.right === null){
//             return false;
//         } else {
//             return this.right.contains(value)
//         }
//     } else {
//         return true;
//     }
// }

class BST {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insert (value){
        let currentNode = this;
        while(true){
         if (value < currentNode.value){
             if(currentNode.left === null) {
                 currentNode.left === new BST (value);
                 break;
             }
             else {currentNode = currentNode.left;
         }
        } else {
            if (currentNode.right === null){
                currentNode.right = new BST(value);
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
    return this;
}

containst (value){
    let currentNode = this;
    while (currentNode !== null){
        if (value < currentNode.value) {
            currentNode = currentNode.left;
        } else if (value > currentNode.value){
            currentNode = currentNode.right;
        } else {
            return true;
        }
    }
    return false
}
