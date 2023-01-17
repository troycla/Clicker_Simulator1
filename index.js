money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
Petcatcost = 25;
Petdogcost = 250;
upown = 0;
Petcatown = 0;
Petdogown = 0;
Petcatadd = 1;
Petdogadd = 15;
cboost = 1;
wboost = 1;
Petcatmax = 0;
Petdogmax = 0;

//save before exiting
function closingCode() {
  if (confirm("You have closed the window, would you like to save?") === true) {
    save();
    return null;
  }
}

function addcomma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
//updates all values
function reloadall() {
  document.getElementById("click").innerHTML =
    "LB/click: " + addcomma(moneyup) + " | Clicks/sec: " + addcomma(msec);
  document.getElementById("total").innerHTML = "clicks: " + addcomma(money);
  document.getElementById("cat").innerHTML =
    catown + "-clicker cat: " + addcomma(catcost) + " | +" + addcomma(catadd) + "/sec";
  document.getElementById("worker").innerHTML =
    workerown + "-worker: " + addcomma(workercost) + " | +" + addcomma(workadd) + "/sec";
  document.getElementById("upgrade").innerHTML =
    addcomma(upown) + "-main upgrade: " + addcomma(upcost);
}
//overwrites save file
function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneyup", moneyup);
  localStorage.setItem("msec", msec);
  localStorage.setItem("upcost", upcost);
  localStorage.setItem("Petcatcost", Petcatcost);
  localStorage.setItem("Petcatadd", Petcatadd);
  localStorage.setItem("Petdogcost", Petdogcost);
  localStorage.setItem("Petdogadd", Petdogadd);
  localStorage.setItem("Petcatown", Petcatown);
  localStorage.setItem("Petdogown", workerown);
  localStorage.setItem("upown", upown);
  localStorage.setItem("Petcatadd", Petcatadd);
  localStorage.setItem("Petdogadd", Petdogadd);
  localStorage.setItem("cboost", cboost);
  localStorage.setItem("wboost", wboost);
  localStorage.setItem("Petcatmax", catmax);
  localStorage.setItem("Petdogmax", workmax);
}
//loads save file
function load() {
  money = parseInt(localStorage.getItem("money"));
  moneyup = parseInt(localStorage.getItem("moneyup"));
  msec = parseInt(localStorage.getItem("msec"));
  upcost = parseInt(localStorage.getItem("upcost"));
  catcost = parseInt(localStorage.getItem("Petcatcost"));
  upown = parseInt(localStorage.getItem("Petcatadd"));
  workercost = parseInt(localStorage.getItem("Petdogcost"));
  upown = parseInt(localStorage.getItem("Petdogadd"));
  catown = parseInt(localStorage.getItem("Petcatown"));
  workerown = parseInt(localStorage.getItem("Petdohown"));
  upown = parseInt(localStorage.getItem("upown"));
  catadd = parseInt(localStorage.getItem("Petcatadd"));
  workadd = parseInt(localStorage.getItem("Petadd"));
  cboost = parseInt(localStorage.getItem("cboost"));
  wboost = parseInt(localStorage.getItem("wboost"));
  catmax = parseInt(localStorage.getItem("Petcatmax"));
  workmax = parseInt(localStorage.getItem("Petdogmax"));

  reloadall();
}
//resets all values
function reset() {
  if (confirm("Are you sure you want to reset?") === true) {
    money = 0;
    moneyup = 1;
    msec = 0;
    upcost = 15;
    Petcatcost = 25;
    Petdogcost = 250;
    Petcatown = 0;
    Petdogown = 0;
    upown = 0;
    Petcatadd = 1;
    Petdogadd = 15;
    reloadall();
  }
}
//timer
function myTimer() {
    money += msec;
  document.getElementById("total").innerHTML = "LB: " + addcomma(money);
}
setInterval(myTimer, 1000);

//what happens when button is clicked
function clicked() {
  money += moneyup;
  document.getElementById("total").innerHTML = "LB: " + addcomma(money);
}
//upgrade function
function upgrade(name) {
  if (name == "Petcat") {
    if (money >= Petcatcost && Petcatown < 50) {
      
      if (catown <= 13) {
        msec += Petcatadd;
        catadd++;
        cboost = 1;
      } else if (Petcatown == 14) {
        msec += Petcatadd;
        Petcatadd++;
        cboost = 200;
      } else if (Petcatown <= 23) {
        msec += 200 * Petcatadd;
        Petcatadd++;
        cboost = 200;
      } else if (Petcatown == 24) {
        msec += 200 * Petcatadd;
        Petcatadd++;
        cboost = 5000;
      } else if (Petcatown <= 48) {
        msec += 5000 * Petcatadd;
        Petcatadd++;
        cboost = 5000;
      } else if (Petcatown == 49) {
        msec += 5000 * Petcatadd;
        Petcatadd++;
        cboost = 15000;
      } else {
        msec += 15000 * Petcatadd;
        Petcatadd++;
        cboost = 15000;
      }
      Petcatown += 1;
      money -= Petcatcost;
      Percatcost = Petcatcost * 2;
      document.getElementById("cat").innerHTML =
        Petcatown + "-Petcat: " + addcomma(Petcatcost) + " | +" + addcomma(Petcatadd * cboost) + "/sec";
    } else if (catown == 50) {
      document.getElementById("cat").innerHTML =
        catown + "-clicker cat: MAX | +15% click/sec";
    }
  }

  if (name == "Petdog") {
    if (money >= Petdogcost && Petdogown < 50) {
      
      if (Petdogown <= 13) {
        msec += Petdogadd;
        Petdogadd++;
        wboost = 1;
      } else if (Petdogown == 14) {
        msec += Petdogadd;
        Petdogadd++;
        wboost = 200;
      } else if (Petdogown <= 23) {
        msec += 200 * Petdogadd;
        Petdogadd++;
        wboost = 200;
      } else if (Petdogown == 24) {
        msec += 200 * Petdogadd;
        Petdogadd++;
        wboost = 5000;
      } else if (Petdogown <= 48) {
        msec += 5000 * Petdogadd;
        Petdogadd++;
        wboost = 5000;
      } else if (Petdogown == 49) {
        msec += 5000 * Petdogadd;
        Petdogadd++;
        wboost = 15000;
      } else {
        msec += 15000 * Petdogadd;
        Petdogadd++;
        wboost = 15000;
      }
      Petdogown += 1;
      money -= Petdogcost;
      workercost = workercost * 3;
      document.getElementById("Petdog").innerHTML = 
        Petdogown + "-Petdog: " + addcomma(Petdogcost) + " | +" + addcomma(Petdogadd * wboost) + "/sec";
    } else if (own == 50) {
      document.getElementById("Petdog").innerHTML =
        workerown + "-Petdog: MAX | +35% click/sec";
    }
  }

  if (name == "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1;
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML =
        addcomma(upown) + "-main upgrade: " + addcomma(upcost);
      if (catown == 50) {
        msec -= catmax;
        catmax = Math.floor(moneyup * 0.15);
        msec += catmax;
      }
      if (workerown == 50) {
        msec -= workmax;
        workmax = Math.floor(moneyup * 0.35);
        msec += workmax;
      }
    }
  }

  document.getElementById("click").innerHTML =
    "LB/click: " + addcomma(moneyup) + " | LB/sec: " + addcomma(msec);
  document.getElementById("total").innerHTML = "LB: " + addcomma(money);
}
