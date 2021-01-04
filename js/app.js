'use strict';

//create constructor
function StoreLocation(maxNumCust, minNumCust, cookieAvg, randomNum, totalCookiesPerHour, cookiesTotalSum) {
    this.max = maxNumCust;
    this.min = minNumCust;
    this.average = cookieAvg;
    this.random = randomNum;
    this.cookiesPerHour = totalCookiesPerHour;
    this.dailytotal = cookiesTotalSum
}

//create objects
var seattle = new StoreLocation(65, 23, 6.3, [], [], 0);
var tokyo = new StoreLocation(24, 3, 1.2, [], [], 0);
var dubai = new StoreLocation(38, 11, 3.7, [], [], 0);
var paris = new StoreLocation(38, 20, 2.3, [], [], 0);
var lima = new StoreLocation(16, 2, 4.6, [], [], 0);

//create function for random num
StoreLocation.prototype.generateRandomNum = function () {
    for (var i = 1; i <= 14; i++) {
        var numPerHour = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.random.push(numPerHour);

    }

}
// // call function
seattle.generateRandomNum();
tokyo.generateRandomNum();
dubai.generateRandomNum();
paris.generateRandomNum();
lima.generateRandomNum();

// create function for cookies per hour
StoreLocation.prototype.cookiesEachHour = function () {
    for (var x = 0; x <= 13; x++) {
        var totalPerHour = parseInt(this.average * this.random[x]);
        this.cookiesPerHour.push(totalPerHour);
    }

}

// // call function
seattle.cookiesEachHour();
tokyo.cookiesEachHour();
dubai.cookiesEachHour();
paris.cookiesEachHour();
lima.cookiesEachHour();

// create function for daily total sum of cookies
StoreLocation.prototype.sumCookies = function () {
    var sum = this.cookiesPerHour[0];
    for (var index = 1; index < this.cookiesPerHour.length; index++) {
        sum = sum + this.cookiesPerHour[index];
    }

    return this.dailytotal = sum;
}

// // call function
seattle.sumCookies();
tokyo.sumCookies();
dubai.sumCookies();
paris.sumCookies();
lima.sumCookies();

//variables to use for table:
var locationNamesString = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
var headerContent = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total']
var parentElement = document.getElementById('cookiesPerHourList');
var table = document.createElement('table');
parentElement.appendChild(table);
//the function:
function tableHeader() {
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    for (var i = 0; i < headerContent.length; i++) {
        var tableHead = document.createElement('th');
        tableHead.textContent = headerContent[i];
        headerRow.appendChild(tableHead);

    }

}

// function tableHeaderVertical() { //needs work//
//     for (var x = 0; x < locationNamesString; x++); {
//         var headerTwo = document.createElement('tr');
//         table.appendChild(headerTwo);
//         var tableHeadVertical = document.createElement('th')
//         tableHeadVertical.textContent = locationNamesString[x];
//         headerTwo.appendChild(tableHeadVertical);

//     }
// }


// //call table header function:
tableHeader();

// create table body using render ():
StoreLocation.prototype.renderStoreLocation = function () { //render is a methos which is part of the object
    //create row for each location:
    var bodyRows = document.createElement('tr');
    table.appendChild(bodyRows);
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

seattle.renderStoreLocation();
tokyo.renderStoreLocation();
dubai.renderStoreLocation();
paris.renderStoreLocation();
lima.renderStoreLocation();






