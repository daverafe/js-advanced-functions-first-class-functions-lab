// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    let firstDrivers = drivers.filter(driver => {
        if(driver === drivers[0] || driver === drivers[1]){
            return driver 
        }
    })
    return firstDrivers
}

const returnLastTwoDrivers = function (drivers) {
    let lastDrivers = drivers.filter(driver => {
        if(driver === drivers[2] || driver === drivers[3]){
            return driver 
        }
    })
    return lastDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
       return fare * int 
    }
}


function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, func) {
    if(func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}