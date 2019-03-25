var clickScore = 0;
var clickValue = 1;
var amountClicked = 0;
var upgrade = 0;
var upgradelvl = 0;
var upgradeCost1 = 50;
var upgradeCost2 = 900;
var farmerAmt = 0;
var amAmt = 0;
var scoreMltply = 1;

function clickButton() {
  clickScore = clickScore + clickValue;
  amountClicked = amountClicked + 1;
  var p = document.getElementById("score");
  p.innerHTML = clickScore;
  var q = document.getElementById("timesClicked");
  q.innerHTML = amountClicked;
}

function upgradeOne() {
  if (clickScore >= upgradeCost1) {
    scoreMltply = scoreMltply + 1;
    clickScore = clickScore - upgradeCost1;
    clickValue = clickValue + scoreMltply;
    upgradeCost1 = upgradeCost1 * 3;
    farmerAmt++;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var p = document.getElementById("farmWorker");
    p.innerHTML = upgradeCost1 + " TJ";
    var g = document.getElementById("workerAmt");
    g.innerHTML = (farmerAmt + " Farmers");
  }
}

function upgradeTwo() {
  if (clickScore >= upgradeCost2) {
    scoreMltply = scoreMltply + 75;
    clickScore = clickScore - upgradeCost2;
    clickValue = clickValue + scoreMltply;
    upgradeCost2 = upgradeCost2 * 2;
    amAmt++;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var p = document.getElementById("upgrade2");
    p.innerHTML = upgradeCost2 + " TJ";
    var g = document.getElementById("amAmt");
    g.innerHTML = (amAmt + " Assistant Managers");
  }
}
