// Global constants
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function updateTime(time) {
    // Update the defaultClock element on the main page 
    document.getElementById("defaultClock").innerHTML = time;
}
function updateOverClock(overClockcontent) {
    // Update the defaultOverClock element on the main page 
    document.getElementById("defaultOverClock").innerHTML = overClockcontent;
}
function updateUnderClock(underClockcontent) {
    // Update the defaultUnderClock element on the main page 
    document.getElementById("defaultUnderClock").innerHTML = underClockcontent;
}


function generateTime() {
    // Generates the time using the time_options as configuration
    var newtime = new Date().toLocaleTimeString('en-AU', time_options);
    updateTime(newtime);
}
function generateOverClock() {
    // Generates the content over the clock
    if (overClock.mode == "weekday") {
        var newOverClock = new Date().getDay();
        updateOverClock(weekdays[newOverClock]);
    } else if (overClock.mode == "none") {
        updateOverClock("");
    } else {
        console.log("Error: Invalid mode");
    }
}
function generateUnderClock() {
    // Generates the content under the clock
    if (underClock.mode == "fulldate") {
        var newUnderClock = new Date().toDateString();
        updateUnderClock(newUnderClock);
    } else {
        console.log("Error: Invalid mode");
    }
}
function generatePage() {
    // Regenerate all of the clock elements
    // Calls all of the generate* functions
    generateTime();
    generateOverClock();
    generateUnderClock();
}

// Configuration for the clock elements

var time_options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
};
var overClock = {
    mode: "weekday",
    active: true
};
var underClock = {
    mode: "fulldate",
    active: true
};

// Regenerates the page every 1000 milliseconds
setInterval(generatePage, 1000);