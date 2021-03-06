'use strict';

var locationNames = []
//create constructor
function StoreLocation(maxNumCust, minNumCust, cookieAvg, randomNum, totalCookiesPerHour, cookiesTotalSum, name) {
    this.max = maxNumCust;
    this.min = minNumCust;
    this.average = cookieAvg;
    this.random = randomNum;
    this.cookiesPerHour = totalCookiesPerHour;
    this.dailytotal = cookiesTotalSum;
    this.locationName = name;
    locationNames.push(this);

}


//create objects
var locationOne = new StoreLocation(65, 23, 6.3, [], [], 0, 'Seattle');
var locationTwo = new StoreLocation(24, 3, 1.2, [], [], 0, 'Tokyo');
var locationThree = new StoreLocation(38, 11, 3.7, [], [], 0, 'Dubai');
var locationFour = new StoreLocation(38, 20, 2.3, [], [], 0, 'Paris');
var locationFive = new StoreLocation(16, 2, 4.6, [], [], 0, 'Lima');

//create function for random num
StoreLocation.prototype.generateRandomNum = function () {
    for (var i = 1; i <= 14; i++) {
        var numPerHour = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.random.push(numPerHour);

    }

}


// create function for cookies per hour
StoreLocation.prototype.cookiesEachHour = function () {
    for (var x = 0; x <= 13; x++) {
        var totalPerHour = parseInt(this.average * this.random[x]);
        this.cookiesPerHour.push(totalPerHour);
    }

}



// create function for daily total sum of cookies
StoreLocation.prototype.sumCookies = function () {
    var sum = this.cookiesPerHour[0];
    for (var index = 1; index < this.cookiesPerHour.length; index++) {
        sum = sum + this.cookiesPerHour[index];
    }

    return this.dailytotal = sum;
}


//variables to use for table:

var headerContent = ["", '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total']
var parentElement = document.getElementById('cookiesPerHourList');
var table = document.createElement('table');
parentElement.appendChild(table);
//the function for horiaontal heading:
function tableHeader() {
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    for (var i = 0; i < headerContent.length; i++) {
        var tableHead = document.createElement('th');
        tableHead.textContent = headerContent[i];
        headerRow.appendChild(tableHead);

    }

}



// create table body using render ():
StoreLocation.prototype.renderBodyContent = function () { //render is a method which is part of the object
    //create row for each location:
    var bodyRows = document.createElement('tr');
    table.appendChild(bodyRows);
    var locationsName = document.createElement("th")
    locationsName.textContent = this.locationName
    bodyRows.appendChild(locationsName)
    //loop through the number of cookies for each loaction:
    for (var l = 0; l <= 13; l++) {
        var tableData = document.createElement('td');
        tableData.textContent = this.cookiesPerHour[l]
        bodyRows.appendChild(tableData);

    }

    var total = document.createElement('td');
    bodyRows.appendChild(total);
    total.textContent = this.dailytotal


}


// create footer-total sum
function tableFooter() {
    var totalSumRow = document.createElement('tr');
    table.appendChild(totalSumRow);
    var totalPerHourHead = document.createElement('th')
    totalPerHourHead.textContent = 'Total'
    totalSumRow.appendChild(totalPerHourHead)
    var sum = 0

    for (var i = 0; i <= 13; i++) {
        var totalData = document.createElement('td');
        totalSumRow.appendChild(totalData);
        var sum = 0
        for (var k = 0; k < locationNames.length; k++) {
            sum = sum + locationNames[k].cookiesPerHour[i];



        }
        totalData.textContent = sum



    }

    var dailyTotalSumData = document.createElement('td')
    totalSumRow.appendChild(dailyTotalSumData);
    var sumDaily = 0
    for (var v = 0; v < locationNames.length; v++) {
        sumDaily = sumDaily + locationNames[v].dailytotal
    }

    dailyTotalSumData.textContent = sumDaily

}

// //call table header function:
tableHeader();

//Call functions:
for (var i=0; i<locationNames.length; i++){
    locationNames[i].generateRandomNum();
    locationNames[i].cookiesEachHour();
    locationNames[i].sumCookies();
    locationNames[i].renderBodyContent();
}


// call total sum function in footer
tableFooter();


//get form input:
var cookiesForm = document.getElementById('Cookie Sales')
cookiesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    table.innerHTML = "";
    var maxCust = parseInt(event.target.maxNumCust.value);
    var minCust = parseInt(event.target.minNumCust.value);
    var Avg = event.target.cookieAvg.value;
    var thelocationsName = event.target.theLocationName.value;
    var newLocation = new StoreLocation(maxCust, minCust, Avg, [], [], 0, thelocationsName);
    tableHeader();
    for (var i=0; i<locationNames.length; i++){
        locationNames[i].generateRandomNum();
        locationNames[i].cookiesEachHour();
        locationNames[i].sumCookies();
        locationNames[i].renderBodyContent();
    }
    tableFooter();
  
});








