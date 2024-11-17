//copyright i footer
$(document).ready(function(){


var paragraph = document.getElementById("year");
var text = document.createTextNode(" 2024 Malin Bengtsson");

paragraph.appendChild(text);
//slut copyright

const menu = document.querySelector(".menu");

menu.innerHTML += `<li><a href="playground.html">playground</a></li>`;

//Playground

const distance = document.getElementById("distance");
const price = document.getElementById("price");
const split = document.getElementById("split");
const consumption = document.getElementById("consumption");
const fuelCalc = document.getElementById("fuel-calc");
const calcBtn = document.getElementById("calc-btn");
const output = document.getElementById("output");
const resetBtn = document.getElementById("reset-btn");

calcBtn.addEventListener("click", () => {

  priceVal = Number(price.value.replace(/[^-0-9.,]/g, ""));
  splitVal = Number(split.value.replace(/[^-0-9.,]/g, ""));
  consumptionVal = Number(consumption.value.replace(/[^-0-9.,]/g, ""));
  distanceVal = Number(distance.value.replace(/[^-0-9.,]/g, ""));
  const consumptionPerKM = consumptionVal / 100;

  output.innerHTML =   `<strong>${((distanceVal * consumptionPerKM * priceVal) / splitVal).toFixed(2)} kr</strong> per person`;

  if (!distanceVal || distanceVal < 0) {
    output.innerText = "Please enter a valid distance"
  }else if (!consumptionVal || consumptionVal < 0) {
    output.innerText = "Please enter the fuel consumption of your car"
  }else if (!priceVal || priceVal < 0) {
    output.innerText = "Please enter the current fuel price"
  }else if (!splitVal || splitVal < 0) {
    output.innerText = "Please enter how many people will be splitting the cost"
  };
});

resetBtn.addEventListener("click", () => {
  output.innerText = "";
  $('input').val("");
});

$("input").keypress(function(e) {
    if(e.which == 13) {
        calcBtn.click();
    }
});


});
