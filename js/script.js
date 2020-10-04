'use strict';
console.log('Connected.');

// COUNTDOWN TO NOV 3, 2020
// Countdown code adapted from https://www.w3schools.com/howto/howto_js_countdown.asp

var countDownDate = new Date("Nov 3, 2020 00:00:00").getTime();     // Set the date we're counting down to
var x = setInterval(function() {                                    // Update the count down every 1 second
    var now = new Date().getTime();                                 // Get today's date and time
    var distance = countDownDate - now;                             // Find the distance between now and the count down date
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));          // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;                                // Output the result in an element with id="countdown"
    
  if (distance < 0) {                                               // If the count down is over, write some text 
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Thank you for voting!";
  }
}, 1000);

// Are you old enough to vote?
function oldEnough() {

    var birthday = prompt('Please enter your date of birth:', 'MM/DD/YYYY');
    var bdayInt = Number(new Date(birthday));
    var electionInt = Number(new Date('Oct 29, 2020')); //5 days before 11/03/2020 to get calculation right
    var electionAgeMil = electionInt-bdayInt;
    var electionAge = Math.floor(electionAgeMil/31536000000);

if (electionAge >= 18) {
    document.getElementById("canRegister").innerHTML = 'Great news! You are old enough to register to vote!';
}
else {
    document.getElementById("canRegister").innerHTML = 'Sorry, you are too young to register to vote.';
}
}

// Greeting

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening! It is ';
} else if (hourNow > 12) {
    greeting = 'Good afternoon! It is ';
} else if (hourNow > 0) {
    greeting = 'Good morning! It is ';
} else {
    greeting = 'Welcome! It is ';
}

document.getElementById("welcome").innerHTML = '<h3>' + greeting + '</h3>';