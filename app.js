'use strict';
var elTarget = document.getElementById('table-body');
var table = document.createElement('table');// BODY
elTarget.appendChild(table);// Table Head Created
var tableHead = document.createElement('thead');
table.appendChild(tableHead);// Table Body
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];

var tableStart = document.createElement('th');
tableStart.textContent = '';

tableHead.appendChild(tableStart);

for (var a = 0; a < openHours.length; a++) {
  var tableStart = document.createElement('th');
  tableStart.textContent = openHours[a];
  tableHead.appendChild(tableStart);
}
// Constructor Function for Table
function Stores(store, minCust, maxCust, avgCookieSales) {
  this.name = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.totalcookiesPerday = 0
  this.array = [];
}

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
var storeLocations = [Seattle, Tokyo, Dubai, Paris, Lima];

// Constructor Function for Rand Nums
function Stores(store, minCust, maxCust, avgCookieSales) {
  this.name = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.totalcookiesPerday = 0
  this.array = [];
}
// Function Prototype
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
Seattle.printTable();
var Tokyo = new Stores('Tokyo', 3, 24, 1.2);
Tokyo.numOfcustomers();
Tokyo.printTable();
var Dubai = new Stores('Dubai', 11, 38, 3.7);
Dubai.numOfcustomers();
Dubai.printTable();
var Paris = new Stores('Paris', 20, 38, 2.3);
Paris.numOfcustomers();
Paris.printTable();
var Lima = new Stores('Lima', 2, 16, 4.6);
Lima.numOfcustomers();
Lima.printTable();

console.log(Seattle.array);
console.log(Tokyo.array);
console.log(Dubai.array);
console.log(Paris.array);
console.log(Lima.array);
var storeLocations = [Seattle, Tokyo, Dubai, Paris, Lima];


