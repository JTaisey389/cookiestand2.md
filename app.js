'use strict';
var elTarget = document.getElementById('table-body');
var table = document.createElement('table');// BODY
elTarget.appendChild(table);// Table Head Created
var tableHead = document.createElement('thead');
table.appendChild(tableHead);// Table Body
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);

// Variable to start creation of table
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
var tableStart = document.createElement('th');
tableStart.textContent = '';

tableHead.appendChild(tableStart);
for (var a = 0; a < openHours.length; a++) {
  var tableStart = document.createElement('th');
  tableStart.textContent = openHours[a];
  tableHead.appendChild(tableStart);
}
// Constructor Function for Table and Rand Names
function Stores(store, minCust, maxCust, avgCookieSales) {
  this.name = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.totalcookiesPerday = 0
  this.array = [];
}
// Arrays for hours and Store location Names
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
var storeLocations = [];


// Function Prototype for Random
Stores.prototype.numOfcustomers = function () {
  // var totalcookiesPerday = 0;
  for (var i = 0; i < openHours.length - 1; i++) {
    var cookieshour = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgCookieSales);
    this.totalcookiesPerday += cookieshour;
    this.array.push(cookieshour);
  }
  this.array.push(this.totalcookiesPerday);
}

Stores.prototype.printTable = function () {
  var row = document.createElement('tr');
  var nameCell = document.createElement('td');
  tableBody.appendChild(row);
  nameCell.textContent = this.name;
  row.append(nameCell);

  for (var i = 0; i < openHours.length; i++) {
    var dataCell = document.createElement('td');
    dataCell.textContent = this.array[i];
    row.appendChild(dataCell);
  }
}
// Declaring Functions and printing to the tables
var Seattle = new Stores('Seattle', 23, 65, 6.3);
Seattle.numOfcustomers();
storeLocations.push(Seattle);
Seattle.printTable();
var Tokyo = new Stores('Tokyo', 3, 24, 1.2);
Tokyo.numOfcustomers();
storeLocations.push(Tokyo);
Tokyo.printTable();
var Dubai = new Stores('Dubai', 11, 38, 3.7);
Dubai.numOfcustomers();
storeLocations.push(Dubai);
Dubai.printTable();
var Paris = new Stores('Paris', 20, 38, 2.3);
Paris.numOfcustomers();
storeLocations.push(Paris);
Paris.printTable();
var Lima = new Stores('Lima', 2, 16, 4.6);
Lima.numOfcustomers();
storeLocations.push(Lima);
Lima.printTable();

console.log(Seattle.array);
console.log(Tokyo.array);
console.log(Dubai.array);
console.log(Paris.array);
console.log(Lima.array);
// var storeLocations = [Seattle, Tokyo, Dubai, Paris, Lima];

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
var total = ['Totals'];
function hourTotals() {
  var dayTot = 0
  // First cell is to have totals 
  var tablefoot = document.createElement('tfoot');
  var tablerow = document.createElement('tr');
  var tablehead = document.createElement('th');
  tablehead.textContent = 'Totals:';
  tablerow.appendChild(tablehead);
  tablefoot.appendChild(tablerow);

  for (var i = 0; i < openHours.length - 1; i++) {
    console.log(dayTot);
    var hourTot = 0
    for (var j = 0; j < storeLocations.length; j++) {
      console.log(storeLocations);
      hourTot += storeLocations[j].array[i]
    }
    console.log(hourTot);
    var tabledata = document.createElement('td');
    tabledata.textContent = hourTot;
    tablerow.appendChild(tabledata);
    // were the hour append will live 
    // tablefoot.appendChild(hourTotals);
    dayTot += hourTot;
  }
  // daily total number to append
  var tabledata = document.createElement('td');
  tabledata.textContent = dayTot;
  tablerow.appendChild(tabledata);
  table.appendChild(tablefoot);
}
hourTotals();


// Lab 09 01.21

// VARIABLES

var boxElement = document.getElementById('box');
var inputElement = document.getElementById('input-one');
var newStore = [];
// BOXELEMENTS
boxElement.addEventListener('click', function () {
  console.log('box was clicked');
});
boxElement.addEventListener('mouseover', function () {
  console.log('box was hovered');
  console.log(newStore);
});
// INPUT ELEMENT
inputElement.addEventListener('input', function (event) {
  console.log(event.target);  // should tell us about the input element itself
  console.log(event.target.value); // the thing we really want => the value of the input field
});
// VAR TO PULL FROM HTML
var formElement = document.getElementById('store-create');
// 
formElement.addEventListener('submit', function (event) {
  event.preventDefault(); // we need this to stop forms from refreshing
  console.log(event.target.storecreate.value);
  console.log(event.target.mincust.value);
  console.log(event.target.maxcust.value);
  console.log(event.target.avrg.value);

  var name = event.target.storecreate.value;
  var max = event.target.maxcust.value;
  var min = event.target.mincust.value;
  var avrg = event.target.avrg.value;

// MinCust, MaxCust, Avrg
  var storeConstructFunc = new Store(name, min, max, avrg);

  newStore.push(storeConstructFunc);
});
// FUNCTION
function Store(name, custmax, custmmin, custavrg) {

  this.name = name;
  this.max = custmax;
  this.min = custmmin;
  this.avrg = custavrg;
}
// PUSHES TO THE CONSOLE
console.log(newStore);

// // Demo CODE
// // var boxElement = document.getElementById('box');

// // var inputElement = document.getElementById('input-one');

// var kittens = [];

// boxElement.addEventListener('click', function () {
//   console.log('box was clicked');
// });

// boxElement.addEventListener('mouseover', function () {
//   console.log('box was hovered');
//   console.log(kittens);
// });

// // boxElement.addEventListener('click', console.log('box was clicked')); // we cannot define the function like this because console.log does not return a function
// // console.log(inputElement);

// inputElement.addEventListener('input', function (event) {
//   console.log(event.target);  // should tell us about the input element itself
//   console.log(event.target.value); // the thing we really want => the value of the input field
// });

// var formElement = document.getElementById('kitten-form');
// formElement.addEventListener('submit', function (event) {
//   event.preventDefault(); // we need this to stop forms from refreshing
//   console.log(event.target.nickname.value);
//   console.log(event.target.breed.value);
//   console.log(event.target.personality.value);

//   var name = event.target.nickname.value;
//   var breed = event.target.breed.value;
//   var personality = event.target.personality.value

//   var kittenFromConstructor = new Kitten(name, breed, personality);

//   kittens.push(kittenFromConstructor);
// });

// function Kitten(name, breed, personality) {

//   this.name = name;
//   this.breed = breed;
//   this.personality = personality;

// }

// console.log(kittens);