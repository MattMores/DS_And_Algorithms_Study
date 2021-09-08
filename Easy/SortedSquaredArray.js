//Write a funciton that take a sorted ascending array and returns a
//new array of same length with the squares of the original integers
//also sorted in ascending order.

function sortedSquaredArray(array) {
    let newArray = []
    for (let nums of array) {
        newArray.push(Math.pow(nums, 2))
    }
    return newArray.sort((a, b) => a - b);
  }

  var sortedSquares = function(nums) {
    let squaredSquares = []
    for (let i = 0; i < nums.length; i++){
        num = nums[i]
        num = Math.pow(num, 2)
            squaredSquares.push(num)
    }
    return squaredSquares.sort((a, b) => a - b)
};


console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])) // [1, 4, 9, 25, 36, 64, 81]
