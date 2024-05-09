function selectReligiousEvent() {
    console.log("Dropdown button clicked. Do something here if needed."); 
}

function updateShabEMerajTime() {
    var shabEMerajStartTime = new Date("2025-01-27T18:00:00Z");
    var currentDate = new Date();
    var timeDifference = shabEMerajStartTime - currentDate;

    if (timeDifference > 0) {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        var milliseconds = Math.floor(timeDifference % 1000);
        document.getElementById("shabEMeraj").innerHTML = "Time until Shab-e-Meraj 2025: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, " + milliseconds + " milliseconds";
    } else {
        document.getElementById("shabEMeraj").innerHTML = "Shab-e-Meraj 2025 is ongoing";
    }
    setInterval(updateShabEMerajTime, 1000);
}
updateShabEMerajTime();

function updateRamadanTime() {
    var ramadanStartTime = new Date("2025-02-28T18:00:00.000Z");
    var ramadanEndTime = new Date("2025-03-30T23:59:59.999Z");
    var currentDate = new Date();
    var timeDifferenceStart = ramadanStartTime - currentDate;
    var timeDifferenceEnd = ramadanEndTime - currentDate;

    if (timeDifferenceStart > 0) {
        var days = Math.floor(timeDifferenceStart / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifferenceStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifferenceStart % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifferenceStart % (1000 * 60)) / 1000);
        var milliseconds = Math.floor(timeDifferenceStart % 1000);
        document.getElementById("ramadan").innerHTML = "Time until Ramadan 2025: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, " + milliseconds + " milliseconds";
    } else if (timeDifferenceEnd > 0) {
        document.getElementById("ramadan").innerHTML = "Ramadan 2025 is ongoing";
    } else {
        document.getElementById("ramadan").innerHTML = "Ramadan 2025 has ended";
    }
    setInterval(updateRamadanTime, 1000);
}
updateRamadanTime();

function updateEidUlFitrTime() {
    var eidUlFitrStartTime = new Date("2025-03-30T18:00:00.000Z");
    var eidUlFitrEndTime = new Date("2025-03-31T23:59:59.999Z");
    var currentDate = new Date();
    var timeDifferenceStart = eidUlFitrStartTime - currentDate;
    var timeDifferenceEnd = eidUlFitrEndTime - currentDate;

    if (timeDifferenceStart > 0) {
        var days = Math.floor(timeDifferenceStart / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifferenceStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifferenceStart % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifferenceStart % (1000 * 60)) / 1000);
        var milliseconds = Math.floor(timeDifferenceStart % 1000);
        document.getElementById("eidUlFitr").innerHTML = "Time until Eid ul-Fitr 2025: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, " + milliseconds + " milliseconds";
    } else if (timeDifferenceEnd > 0) {
        document.getElementById("eidUlFitr").innerHTML = "Eid ul-Fitr 2025 is ongoing";
    } else {
        document.getElementById("eidUlFitr").innerHTML = "Eid ul-Fitr 2025 has ended";
    }
    setInterval(updateEidUlFitrTime, 1000);
}
updateEidUlFitrTime();

function updateBakraEidTime() {
    var bakraEidStartTime = new Date("2024-06-16T18:00:00Z");
    var bakraEidEndTime = new Date("2024-06-17T23:59:59Z");
    var currentDate = new Date();
    var timeDifference = bakraEidStartTime - currentDate;

    if (timeDifference > 0) {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        var milliseconds = Math.floor(timeDifference % 1000);
        document.getElementById("bakraEid").innerHTML = "Time until Bakra Eid 2024: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, " + milliseconds + " milliseconds";
    } else {
        document.getElementById("bakraEid").innerHTML = "Bakra Eid 2024 is ongoing";
    }
    setInterval(updateBakraEidTime, 1000);
}
updateBakraEidTime();


//     updateEvent("Shab-e-Meraj", "2025-01-27T18:00:00Z", "2025-03-30T23:59:59.999Z");
//     updateEvent("Ramadan", "2025-02-28T18:00:00.000Z", "2025-03-30T23:59:59.999Z");
//     updateEvent("Eid ul-Fitr", "2025-03-30T18:00:00.000Z", "2025-03-31T23:59:59.999Z");
//     updateEvent("Bakra Eid", "2024-06-16T18:00:00Z", "2024-06-17T23:59:59Z");
// }

// function updateEvent(eventName, startTimeString, endTimeString) {
//     var startTime = new Date(startTimeString);
//     var currentTime = new Date();
//     var timeDifference = startTime - currentTime;
//     var eventElement = document.getElementById(eventName.replace(/\s+/g, ''));

//     if (timeDifference > 0) {
//         displayTimeUntilEvent(eventElement, eventName, timeDifference);
//     } else if (endTimeString && new Date(endTimeString) - currentTime > 0) {
//         eventElement.innerHTML = eventName + " is ongoing";
//     } else {
//         eventElement.innerHTML = eventName + " has ended";
//     }
//     setInterval(updateReligiousEvents, 1000);
// }

// function displayTimeUntilEvent(element, eventName, timeDifference) {
//     var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
//     var milliseconds = Math.floor(timeDifference % 1000);
//     element.innerHTML = "Time until " + eventName + ": " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, " + milliseconds + " milliseconds";
// }

// updateReligiousEvents();