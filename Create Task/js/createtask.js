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
var upgradeCost6 = 30;
var upgradeCost7 = 40;
var upgradeCost6 = 50;
var upgradeCost7 = 450;
var upgradeCost8 = 2500;
var start = false;
var farmerAmt = 0;
var amAmt = 0;
var bbAmt = 0;
var emAmt = 0;
var aiAmt = 0;
var juiceMkrAmt = 0;
var cbAmt = 0;
var spAmt = 0;
var scoreMltply = 1;
var tjps=0;
var timeScore = 0;
var timeSecScore = 100;
var juiceShopAmt = 0;
var timeScore6 = 0;
var timeScore7 = 0;
var timeScore8 = 0;


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

function upgradeSix () {
  if (clickScore >= upgradeCost6) {
    clickScore = clickScore - upgradeCost6;
    upgradeCost6 = upgradeCost6 * 3;
    juiceMkrAmt++;
    timeScore6++;
    var p = document.getElementById("upgrade6");
    p.innerHTML = upgradeCost6 + " TJ";
    var g = document.getElementById("juiceMkrAmt");
    g.innerHTML = (juiceMkrAmt + " Juice Makers");
    timeSix();
  }
}
function timeSix() {
  timeScore6 = 1;
  clickScore = (clickScore) + (timeScore6);
  var q = document.getElementById("score");
  q.innerHTML = clickScore;
  setTimeout(timeSix, 250);
}

function upgradeSeven () {
  if (clickScore >= upgradeCost7) {
    clickScore = clickScore - upgradeCost7;
    upgradeCost7 = upgradeCost7 * 4;
    cbAmt++;
    timeScore7 = timeScore7 + 5;
    var p = document.getElementById("upgrade7");
    p.innerHTML = upgradeCost7 + " TJ";
    var g = document.getElementById("cbAmt");
    g.innerHTML = (cbAmt + " Conveyor Belts");
    timeSeven();
  }
}
function timeSeven() {
  timeScore7 = 10;
  clickScore = (clickScore) + (timeScore7);
  var q = document.getElementById("score");
  q.innerHTML = clickScore;
  setTimeout(timeSeven, 150);
}

function upgradeEight () {
  if (clickScore >= upgradeCost8) {
    clickScore = clickScore - upgradeCost8;
    upgradeCost8 = upgradeCost8 * 5;
    spAmt++;
    timeScore8 = timeScore8 + 10;
    var p = document.getElementById("upgrade8");
    p.innerHTML = upgradeCost8 + " TJ";
    var g = document.getElementById("spAmt");
    g.innerHTML = (spAmt + " Solar Panels");
    timeEight();
  }
}
function timeEight() {
  timeScore8 = 10;
  clickScore = (clickScore) + (timeScore8);
  var q = document.getElementById("score");
  q.innerHTML = clickScore;
  setTimeout(timeEight, 150);
}
function upgradeSeven(){
    if (clickScore >= upgradeCost7) {
      clickScore = clickScore - upgradeCost7;
      upgradeCost7 = upgradeCost7 * 3;
      juiceShopAmt++;
      timeSecScore++
      var q = document.getElementById("score");
      q.innerHTML = clickScore;
      var p = document.getElementById("upgrade7");
      p.innerHTML = upgradeCost7 + " TJ";
      var g = document.getElementById("juiceShpAmt");
      g.innerHTML = (juiceShpAmt + " Juice Shops");
    }
    time1();
  }
  function time1(){
    clickScore = (clickScore) + (timeSecScore);
    var q = document.getElementById("score");
    q.innerHTML = clickScore;
    setTimeout(time, 1000);
  }