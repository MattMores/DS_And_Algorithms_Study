function classPhotos(redShirtHeights, blueShirtHeights){
    const redSorted = redShirtHeights.sort((a, b) => a - b);
    const blueSorted = blueShirtHeights.sort((a, b) => a - b);

    let frontRow = redSorted[0] < blueSorted[0] ? "RED" : "BLUE";

    if (frontRow === "RED") {
        for (const i = 0; i < redSorted.length; i++) {
            if (redSorted[i] >= blueSorted[i]) return false
        }
    if (frontRow === "BLUE"){
        for (const i = 0; i < blueSorted.length; i++){
            if (blueSorted[i] >= redSorted[i]) return false
        }
    }
    return true
}
