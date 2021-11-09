// get current date and time from moment 
function getDay(){
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentDay);
}

getDay();

//color code time blocks based on when a task is over due, due in the future or current 
//first get current time 
var currentTime = (new Date()).getHours();
var now = moment().format('h:mm:ss');
console.log(now);
// write an if else if to determine the color block for the currentTime 
//      $.each(currentTime, function(i, hour) {
//      var hourBlock = $('#hours');
//         if (currentTime === now) {
//         hourBlock.addClass('present');
//      } else if (currentTime < now) {
//          hourBlock.addClass('past');
//      } else if (currentTime > now) {
//          hourBlock.addClass('future');
//      }
// });






// //click events to buttons 
// //function to save to local storage 
$(".saveBtn").click(function (){
    var inputSave = document.querySelectorAll('input').values;
    localStorage.setItem('text', inputSave);
//   var nineAm = document.getElementById('9-am').value;
//     localStorage.setItem('text', nineAm);
//     var tenAm = document.getElementById('10-am').value;
//     localStorage.setItem('text', tenAm);
//     var ellevenAm = document.getElementById('11-am').value;
//     localStorage.setItem('text', ellevenAm);
//     var twelvePm = document.getElementById('12-pm').value;
//     localStorage.setItem('text', twelvePm);
//     var onePm = document.getElementById('1-pm').value;
//     localStorage.setItem('text', onePm);
//     var twoPm = document.getElementById('2-pm').value;
//     localStorage.setItem('text', twoPm);
//     var threePm = document.getElementById('3-pm').value;
//     localStorage.setItem('text', threePm);
//     var fourPm = document.getElementById('4-pm').value;
//     localStorage.setItem('text', fourPm);
//     var fivePm = document.getElementById('5-pm').value;
//     localStorage.setItem('text', fivePm);
console.log('clicked');
});








