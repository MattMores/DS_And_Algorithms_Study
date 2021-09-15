// Fastest = true then you return the maximum speed. False then the minimum speed.

function tandemBicycle (redShirtSpeeds, blueShirtSpeeds, fastest) {
    if (fastest === true) {
        redShirtSpeeds.sort((a, b) => (a - b));
        blueShirtSpeeds.sort((a, b) => (b - a));
    } else {
        redShirtSpeeds.sort((a, b) => (a - b));
        blueShirtSpeeds.sort((a, b) => (a - b));
    }
    let totalSpeed = 0;
    for (let i = 0; i < redShirtSpeeds.length; i++){
        if (redShirtSpeeds[i] >= blueShirtSpeeds[i]) {
            totalSpeed += redShirtSpeeds[i]
            } else totalSpeed += blueShirtSpeeds[i]
        }
    return totalSpeed
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    if (fastest) {
      blueShirtSpeeds.sort((a, b) => b - a);
    } else {
      blueShirtSpeeds.sort((a, b) => a - b);
    }

    let totalSpeed = 0;
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
      const redShirtSpeed = redShirtSpeeds[idx];
      const blueShirtSpeed = blueShirtSpeeds[idx];
      totalSpeed += Math.max(redShirtSpeed, blueShirtSpeed);
    }

    return totalSpeed;
  }

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    if (!fastest) reverseArrayInPlace(redShirtSpeeds);
    let totalSpeed = 0;
    for (let i = 0; i < redShirtSpeeds.length; i++) {
        const rider1 = redShirtSpeeds[i];
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1];
        totalSpeed += Math.max(rider1, rider2)
    }
    return totalSpeed;
}

function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start ++;
        end --;
    }
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true)) // 32
