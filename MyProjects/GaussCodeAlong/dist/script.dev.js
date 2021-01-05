"use strict";

// HTML Elements
var calcBTN = document.getElementById("calc-btn");
var sumOUT = document.getElementById("sum-out"); // Event Listener

calcBTN.addEventListener("click", calcSum); // Event Function

function calcSum() {
  // Print integers 1 to 100
  var total = 0;
  var nIN = document.getElementById("n-in").value;
  var nOUT = document.getElementById("n-out");

  for (var n = 1; n <= nIN; n++) {
    total = total + n;
  }

  sumOUT.innerHTML = total;
  nOUT.innerHTML = nIN;
}