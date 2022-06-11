// Code your solution in this file!
function distanceFromHqInBlocks(distanceCovered) { // 42nd st
    if (distanceCovered > 42) {
        return distanceCovered - 42;
    } else {
        return 42 - distanceCovered;
    }
}

function distanceFromHqInFeet(distanceCovered) {
    if (distanceCovered > 42) {
        let distanceInFeet = distanceCovered - 42
        return distanceInFeet * 264;
    } else {
        let distanceInFeet = 42 - distanceCovered
        return distanceInFeet * 264;
    }
}

function distanceTravelledInFeet(start, destination) {
    let distanceCovered = (destination - start);
    distanceCovered = Math.abs(distanceCovered);

    if (distanceCovered == 5) {
        return distanceCovered * 264;
    } else if (distanceCovered == 10) {
        return distanceCovered * 264;
    } else {
        return distanceCovered * 264;
    }
}

function calculatesFarePrice(start, destination) {

    let distanceCovered = distanceTravelledInFeet(start, destination);

    if (distanceCovered <= 400) {
        
        distanceCovered *=0;

        return distanceCovered;

    } else if (distanceCovered > 400 && distanceCovered <= 2000) {
        
        distanceCovered -=400;
        
        distanceCovered *=0.02;
        
        return distanceCovered;
        
    } else if (distanceCovered > 2000 && distanceCovered <= 2500) {

        return 25;

    } else {

        return 'cannot travel that far'
    }
}