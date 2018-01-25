// Psudeo code!
//make sure everything is loaded.
$(document).ready(function(){
//Define our vars here:
var totalScore; // equals the accumalation of gem clicks, compared to computerNum to see if win / loss.
var gem1; // gets assigned a random number from 1-20.
var gem2; // gets assigned a random number from 10-20.
var gem3; // gets assigned a random number from 1-10.
var gem4; // gets assigned a random number from 5-15.
var wins; // each time totalScore === randomNbr, this gets ++
var losses; // each tome totalScore > randomNbr, this gets --
var minNumber = 25; // range for randomNbr
var maxNumber = 75; // range for randomNbr
var computerNum = computerNumFromRange(minNumber, maxNumber);

//functions here:
function reset() {
  computerNumFromRange();
  totalScore = 0;
  getGem1();
  getGem2();
  getGem3();
  getGem4();
}

function computerNumFromRange(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
//show values on UI
document.querySelector("#randomNbr").innerHTML = computerNum;
document.querySelector("#totScore").innerHTML = totalScore;
document.querySelector("#won").innerHTML = wins;
document.querySelector("#loss").innerHTML = losses;
// we also need to assign random numbers for each of the crystals, thinking 1-5, 5-10, 10-15, 15-20, so that we make sure we get some good range there. If not, I can see maybe having one 20, one 19, and a 1, and maybe a 3.  that would suck.
//those numbers need to be assigned to their buttons.
// the buttons, when clicked, need to add themselved up.
//the added number is put into a var that keeps track.
// that var get compared against the randomNbr, if it goes above, loss++ and reset, if it matches win++ and reset.


});
