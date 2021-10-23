// get current date and time from moment 
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentDay);


//color code time blocks based on when a task is over due, due in the future or current 

var currentTime= (new Date()).getHours();
function colorBlock() {
var timeOfDay = getHours();
switch(true) {
    case (n > 9) :
        
}




//click events to buttons 
//function to save to local storage 
function saveTask () {
    $("saveBtn").on("click", save);
    console.log("button clicked");
}




