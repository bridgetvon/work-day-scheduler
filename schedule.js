//get items from local storage and parse to display on reload

var nine =localStorage.getItem('1');
 document.getElementById('block9').value = JSON.parse(nine);
 var ten =localStorage.getItem('2');
 document.getElementById('block10').value = ten;
 var eleven =localStorage.getItem('3');
 document.getElementById('block11').value =eleven; 
 var twelve =localStorage.getItem('4');
 document.getElementById('block12').value =twelve; 
 var thirteen =localStorage.getItem('5');
 document.getElementById('block13').value =thirteen;
 var fourteen =localStorage.getItem('6');
 document.getElementById('block14').value =fourteen;
 var fifteen =localStorage.getItem('7');
 document.getElementById('block15').value =fifteen;
 var sixteen =localStorage.getItem('8');
 document.getElementById('block16').value =sixteen;
 var seventeen =localStorage.getItem('9');
 document.getElementById('block17').value =seventeen;


// get current date and time from moment 

function getDay(){
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentDay);
}

getDay();

//color code time blocks based on when a task is over due, due in the future or current 
//first get current time 
// var currentTime = (new Date()).getHours();
// console.log(currentTime);
// var now = moment().format('h:mm:ss');
var now = new Date();
var time = now.getHours();
console.log(time);
console.log(now);

$(document).ready(function() {

    //input boxes as an array get index of each item you loop 
    $(".my-input").each(function(input) {
        // console.log($(".my-input")[input].id);
    //take the data attribute and read the time value to change from string to number 
    console.log($(".time-slot"));
    var dataAttTime = $(".time-slot")[input].id;
    var dataAttNum = Number(dataAttTime);
    console.log(dataAttTime);

    var colorBlock = $(`.my-input`)[input];
        console.log(colorBlock);

    //use if else to determine time color class 
    if(dataAttNum < time) {
        colorBlock.classList.add("past");
    } else if (dataAttNum === time) {
        colorBlock.classList.add("present");
    } else if (dataAttNum > time) {
        colorBlock.classList.add("future");
    }

    });
});
// write an if else if to determine the color block for the currentTime 
//     function getHour() {
//      var hourBlock = $("div.row");
//         if (currentTime === now) {
//         hourBlock.add('.present');
//      } else if (currentTime < now) {
//          hourBlock.addClass('.past');
//      } else if (currentTime > now) {
//          hourBlock.addClass('.future');
//      }
//      console.log('function is running');
// };







// //click events to buttons 
// //function to save to local storage 
$(".saveBtn").click(function (){
    var nine = document.getElementById('block9').value;
    localStorage.setItem('1', JSON.stringify(nine));
    JSON.parse(localStorage.getItem(nine));
    var ten = document.getElementById('block10').value;
    localStorage.setItem('2', ten);
    var eleven = document.getElementById('block11').value;
    localStorage.setItem('3', eleven);
    var twelve = document.getElementById('block12').value;
    localStorage.setItem('4', twelve);
    var one = document.getElementById('block13').value;
    localStorage.setItem('5', one);
    var two = document.getElementById('block14').value;
    localStorage.setItem('6', two);
    var three = document.getElementById('block15').value;
    localStorage.setItem('7', three);
    var four = document.getElementById('block16').value;
    localStorage.setItem('8', four);
    var five = document.getElementById('block17').value;
    localStorage.setItem('9', five);
console.log('clicked');
});








