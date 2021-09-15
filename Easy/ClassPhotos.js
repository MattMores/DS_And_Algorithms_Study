//Even Number of students. Exactly half wearing red /other half blue shirts.
//Arrange the students in two rows. Each containing the same # of students:
//Red shirts must be in same row. Blue shirts must be in same row.
//All students in back row must be strictly taller than the studen directly in
//front of them in the front row.

//Array 1 = heights of students with red shirts
//Array 2 = heights of students with blue shirts

//Same length. All positive integers.

//Function returns whether or not a class photo that follows the
//stated guidelines can be taken.

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
    for (let idx = 0; idx < redShirtHeights.length; idx++){
        const redShirtHeight = redShirtHeights[idx];
        const blueShirtHeight = blueShirtHeights[idx];
        if (shirtColorInFirstRow === "RED"){
            if (redShirtHeight >= blueShirtHeight) return false;
        } else if (blueShirtHeight >= redShirtHeight) return false;
    }
    return true;
  }

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])) // true
