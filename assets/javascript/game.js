// Psudeo code!
//make sure everything is loaded.
$(document).ready(function(){
//Define our vars here:
var gem1 = Math.floor(Math.random() * 10) + 1; // gem values listed here.
var gem2 = Math.floor(Math.random() * 6) + 10;
var gem3 = Math.floor(Math.random() * 6) + 15;
var gem4 = Math.floor(Math.random() * 6) + 20;
var computerNum = Math.floor(Math.random() * 60) + 25; // our random computer generated number to compare against.
var wins = 0; // each time totalScore === randomNbr, this gets ++
var losses = 0; // each tome totalScore > randomNbr, this gets --
var totalScore = 0; // equals the accumalation of gem clicks, compared to computerNum to see if win / loss.
//console.log our numbers here:
console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);
console.log(totalScore);


function check() { // each time you click a gem, this gets run.
  if (totalScore === computerNum) {
    alert("You Win!");
    wins++;
    }
  if (totalScore > computerNum) {
    alert("You lose...");
    losses++;
  }
}



//button logic down here: On click of button, labled gem1-gem4, gets value and adds to totalScore and then runs check().
$("#gemOne").click(function(){
  console.log("totalScore " + totalScore);
  totalScore = totalScore + gem1;
  check();
});
$("#gemTwo").click(function(){
  console.log("totalScore " + totalScore);
  totalScore = totalScore + gem2;
  check();
});
$("#gemThree").click(function(){
  console.log("totalScore " + totalScore);
  totalScore = totalScore + gem3;
  check();
});
$("#gemFour").click(function(){
  console.log("totalScore " + totalScore);
  totalScore = totalScore + gem4;
  check();
});



//show values on UI
document.querySelector("#randomNbr").innerHTML = computerNum;
document.querySelector("#totScore").innerHTML = totalScore;
document.querySelector("#won").innerHTML = wins;
document.querySelector("#loss").innerHTML = losses;
});
