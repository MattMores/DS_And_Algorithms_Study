function classPhotos(redShirtHeights, blueShirtHeights){
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
    for (let i = 0; i < redShirtHeights.length; i++){
        const redShirtHeight = redShirtHeight[i];
        const blueShirtHeight = blueShirtHeights[i];
        if (shirtColorInFirstRow === "RED"){
            if (redShirtHeight >= blueShirtHeight) return false;
        } else if (blueShirtHeight >= redShirtHeight) return false;
    }
    return true;
}


function classPhotos(redShirtHeights, blueShirtHeights){
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE"
    for (let i = 0; i < redShirtHeights.length; i++){
        const redShirtHeight = redShirtHeights[i];
        const blueShirtHeight = blueShirtHeights[i];
        if(shirtColorInFirstRow === 'RED'){
            if (redShirtHeight >= blueShirtHeight) return false;
        } else if (blueShirtHeight >= redShirtHeight) return false;
    }
    return true;
}

function minimumWaitingTime(querires){
    querires.sort((a, b) => a - b);

    let waitingTime = 0;
    let totalWaitingTime = 0;

    for (const duration of queries){
        totalWaitingTime += waitingTIme;
        waitingTime += duration;
    }
    return totalWaitingTime;
}

funciton minimumWaitingTime(querires){
    queries.sort((a,b) => a - b);

    let totalWaitingTime = 0;
    let waitingTime = 0;
    for (const duration of querires){
        totalWaitingTime += waitingTime;
        waitingTime += duration;
    }

    return totalWaitingTime;
}
