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
StoreLocation.prototype.cookiesPerHour = function () {
    for (var x = 0; x <= 13; x++) {
        var totalPerHour = parseInt(this.average * this.random[x]);
        this.cookiesPerHour.push(totalPerHour);
    }

}

// // call function
seattle.cookiesPerHour();
tokyo.cookiesPerHour();
dubai.cookiesPerHour();
paris.cookiesPerHour();
lima.cookiesPerHour();

// create function for daily total sum of cookies
StoreLocation.prototype.sumCookies = function () {
    var sum = this.cookiesPerHour[0];
    for (var index = 1; index < this.cookiesPerHour.length; index++) {
        sum = sum + this.cookiesPerHour[index];
    }

    return seattle.cookiesTotalSum = sum;
}

// // call function
seattle.sumCookies();
tokyo.sumCookies();
dubai.sumCookies();
paris.sumCookies();
lima.sumCookies();





// var seattle = {
//     maxNumCust: 65,
//     minNumCust: 23,
//     cookieAvg: 6.3,
//     randomNum: [],
//     totalCookiesPerHour: [],
//     cookiesTotalSum: 0,
//     generateRandomNum: function () {
//         for (var i = 1; i <= 14; i++) {
//             var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
//             this.randomNum.push(numPerHour);

//         }

//     },

//     cookiesPerHour: function () {
//         for (var x = 0; x <= 13; x++) {
//             var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
//             this.totalCookiesPerHour.push(totalPerHour);
//         }

//     },

//     sumCookies: function () {
//         var sum = this.totalCookiesPerHour[0];
//         for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
//             sum = sum + this.totalCookiesPerHour[index];
//         }

//         return seattle.cookiesTotalSum = sum;
//     }


// }

// seattle.generateRandomNum();
// seattle.cookiesPerHour();
// seattle.sumCookies();
// //console.log(seattle.cookiesTotalSum);

// // var tokyo = {
// //     maxNumCust: 24,
// //     minNumCust: 3,
// //     cookieAvg: 1.2,
// //     randomNum: [],
// //     totalCookiesPerHour: [],
// //     cookiesTotalSum: 0,
//     generateRandomNum: function () {
//         for (var i = 1; i <= 14; i++) {
//             var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
//             this.randomNum.push(numPerHour);

//         }

//     },

//     cookiesPerHour: function () {
//         for (var x = 0; x <= 13; x++) {
//             var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
//             this.totalCookiesPerHour.push(totalPerHour);
//         }

//     },
//     sumCookies: function () {
//         var sum = this.totalCookiesPerHour[0];
//         for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
//             sum = sum + this.totalCookiesPerHour[index];
//         }

//         return tokyo.cookiesTotalSum = sum;
//     }


// }

// tokyo.generateRandomNum();
// tokyo.cookiesPerHour();
// tokyo.sumCookies();

// // var dubai = {
// //     maxNumCust: 38,
// //     minNumCust: 11,
// //     cookieAvg: 3.7,
// //     randomNum: [],
// //     totalCookiesPerHour: [],
// //     cookiesTotalSum: 0,
//     generateRandomNum: function () {
//         for (var i = 1; i <= 14; i++) {
//             var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
//             this.randomNum.push(numPerHour);

//         }

//     },
//     cookiesPerHour: function () {
//         for (var x = 0; x <= 13; x++) {
//             var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
//             this.totalCookiesPerHour.push(totalPerHour);
//         }

//     },
//     sumCookies: function () {
//         var sum = this.totalCookiesPerHour[0];
//         for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
//             sum = sum + this.totalCookiesPerHour[index];
//         }

//         return dubai.cookiesTotalSum = sum;
//     }

// }

// dubai.generateRandomNum();
// dubai.cookiesPerHour();
// dubai.sumCookies();

// // var paris = {
// //     maxNumCust: 38,
// //     minNumCust: 20,
// //     cookieAvg: 2.3,
// //     randomNum: [],
// //     totalCookiesPerHour: [],
// //     cookiesTotalSum: 0,
//     generateRandomNum: function () {
//         for (var i = 1; i <= 14; i++) {
//             var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
//             this.randomNum.push(numPerHour);

//         }

//     },
//     cookiesPerHour: function () {
//         for (var x = 0; x <= 13; x++) {
//             var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
//             this.totalCookiesPerHour.push(totalPerHour);
//         }

//     },
//     sumCookies: function () {
//         var sum = this.totalCookiesPerHour[0];
//         for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
//             sum = sum + this.totalCookiesPerHour[index];
//         }

//         return paris.cookiesTotalSum = sum;
//     }

// }

// paris.generateRandomNum();
// paris.cookiesPerHour();
// paris.sumCookies();

// // var lima = {
// //     maxNumCust: 16,
// //     minNumCust: 2,
// //     cookieAvg: 4.6,
// //     randomNum: [],
// //     totalCookiesPerHour: [],
// //     cookiesTotalSum: 0,
//     generateRandomNum: function () {
//         for (var i = 1; i <= 14; i++) {
//             var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
//             this.randomNum.push(numPerHour);

//         }

//     },
//     cookiesPerHour: function () {
//         for (var x = 0; x <= 13; x++) {
//             var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
//             this.totalCookiesPerHour.push(totalPerHour);
//         }

//     },
//     sumCookies: function () {
//         var sum = this.totalCookiesPerHour[0];
//         for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
//             sum = sum + this.totalCookiesPerHour[index];
//         }

//         return lima.cookiesTotalSum = sum;
//     }

// }

// lima.generateRandomNum();
// lima.cookiesPerHour();
// lima.sumCookies();

//find cookies sum total for all locations:

// //var theCountr = [seattle, tokyo, dubai, paris, lima]
// var cookiesPerLocation = [seattle.totalCookiesPerHour, tokyo.totalCookiesPerHour, dubai.totalCookiesPerHour, paris.totalCookiesPerHour, lima.totalCookiesPerHour]
// var parentElement = document.getElementById('cookiesPerHourList');
// var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ',]
// var locationNames = [seattle, tokyo, dubai, paris, lima];
// var locationNamesString = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// //create list for each location:
// for (var index = 0; index < cookiesPerLocation.length; index++) {
//     var theLocation = cookiesPerLocation[index];
//     //create ul for each location with a heading:
//     var list = document.createElement('ul');
//     parentElement.appendChild(list);
//     var locationName = document.createElement('h2')
//     locationName.textContent = locationNamesString[index];
//     list.appendChild(locationName);
//     //loop through the number of cookies for each loaction:
//     for (var l = 0; l <= 13; l++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = hours[l] + theLocation[l]
//         list.appendChild(listItem);

//     }
//     var listTwo = document.createElement ('li');
//    listTwo.textContent = 'Total: '+ locationNames[index].cookiesTotalSum;
//     list.appendChild(listTwo);


// }








//Error: Calculate random number for each location
// var storeMaxCust = [seattle.maxNumCust, tokyo.maxNumCust, dubai.maxNumCust, paris.maxNumCust, lima.maxNumCust];
// var storeMinCust = [seattle.minNumCust, tokyo.minNumCust, dubai.minNumCust, paris.minNumCust, lima.minNumCust];
// var countr = [seattle, tokyo, dubai, paris, lima]
// for (var index = 0; index < storeMaxCust.length; index++) {
//     for (var i = 1; i <= 14; i++) {
//         function getRandomArbitrary () {
//             var findRandomNum = Math.random() * (storeMaxCust[index] - storeMinCust[index]) + storeMinCust[index];
//             countr[index].randomNum.Push(findRandomNum);


//         }
//     }

// 
