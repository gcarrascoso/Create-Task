var clickScore = 0;
var clickValue = 1;
var amountClicked = 0;
var upgrade = 0;
var upgradelvl = 0;
var upgradeCost1 = 50;
var upgradeCost2 = 900;
var upgradeCost3 = 10000;
var upgradeCost4 = 100000;
var upgradeCost5 = 500000000;
var start = false;
var farmerAmt = 0;
var amAmt = 0;
var bbAmt = 0;
var emAmt = 0;
var aiAmt = 0;
var scoreMltply = 1;
var time= 0;
var tjps=0;

function clickButton() {
  start = false;
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
    scoreMltply = scoreMltply + 5;
    clickScore = clickScore - upgradeCost2;
    clickValue = clickValue + scoreMltply;
    upgradeCost2 = upgradeCost2 * 3;
    amAmt++;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var p = document.getElementById("upgrade2");
    p.innerHTML = upgradeCost2 + " TJ";
    var g = document.getElementById("amAmt");
    g.innerHTML = (amAmt + " Assistant Managers");
  }
}

function upgradeThree() {
  if (clickScore >= upgradeCost3) {
    scoreMltply = scoreMltply + 20;
    clickScore = clickScore - upgradeCost3;
    clickValue = clickValue + scoreMltply;
    upgradeCost3 = upgradeCost3 * 3;
    bbAmt++;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var p = document.getElementById("upgrade3");
    p.innerHTML = upgradeCost3 + " TJ";
    var g = document.getElementById("bbAmt");
    g.innerHTML = (bbAmt + " Boss Babies");
  }
}

function upgradeFour() {
  if (clickScore >= upgradeCost4) {
    scoreMltply = scoreMltply + 150;
    clickScore = clickScore - upgradeCost4;
    clickValue = clickValue + scoreMltply;
    upgradeCost4 = upgradeCost4 * 3;
    emAmt++;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var p = document.getElementById("upgrade4");
    p.innerHTML = upgradeCost4 + " TJ";
    var g = document.getElementById("emAmt");
    g.innerHTML = (emAmt + " Elon Musks");
  }
}

function upgradeFive() {
  if (clickScore >= upgradeCost5) {
    scoreMltply = scoreMltply + 50000;
    clickScore = clickScore - upgradeCost5;
    clickValue = clickValue + scoreMltply;
    upgradeCost5 = upgradeCost5 * 3;
    aiAmt++;
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    var p = document.getElementById("upgrade5");
    p.innerHTML = upgradeCost5 + " TJ";
    var g = document.getElementById("aiAmt");
    g.innerHTML = (aiAmt + " Robots");
  }
}
