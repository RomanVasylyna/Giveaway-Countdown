$(document).ready(() => {

countDown();


function countDown() {

  //Setting Timer
  setInterval(() => {

  //Getting Dates
  let countDownDate = new Date('Dec 31, 2020 11:30');
  let now = new Date();
  let difference = countDownDate - now; //Time until the countDownDate in milliseconds

  //Calculations
  //Converting milliseconds
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //Displaying Elements With JQuery
  $('#days').text(days);
  $('#hours').text(hours);
  $('#minutes').text(minutes);
  $('#seconds').text(seconds);

})


}











})
