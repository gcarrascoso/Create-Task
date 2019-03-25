var clickScore = 0;
var clickValue = 1;
var amountClicked = 0;
var upgrade = 0;
var upgradelvl = 0;
var upgradeCost1 = 50;
var upgradeCost2 = 900;
var time = 0;

function clickButton() {
  clickScore = clickScore + clickValue;
  amountClicked = amountClicked + 1;
  var p = document.getElementById("score");
  p.innerHTML = clickScore;
  var q = document.getElementById("timesClicked");
  q.innerHTML = amountClicked;
}

function upgradeOne() {
  let scoreMltply = 0;
  if (clickScore >= upgradeCost1) {
    scoreMltply = scoreMltply + 1;
    clickScore = clickScore - upgradeCost1;
    clickValue = clickValue + scoreMltply;
    upgradeCost1 = upgradeCost1 * 3;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var p = document.getElementById("upgradeCost");
    p.innerHTML = upgradeCost1;
  }
}

function upgradeTwo() {
  let scoreMltply = 1;
  if (clickScore >= upgradeCost2) {
    scoreMltply = scoreMltply * 3;
    clickScore = clickScore - upgradeCost2;
    clickValue = clickValue * scoreMltply;
    upgradeCost2 = upgradeCost2 * 2;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var a = document.getElementById("upgradeCost2");
    a.innerHTML = upgradeCost2;
  }
}
