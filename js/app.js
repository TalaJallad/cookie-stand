'use strict';

var seattle = {
    maxNumCust: 65,
    minNumCust: 23,
    cookieAvg: 6.3,
    randomNum: [],
    totalCookiesPerHour: [],
    cookiesTotalSum: 0,
    generateRandomNum: function () {
        for (var i = 1; i <= 14; i++) {
            var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
            this.randomNum.push(numPerHour);

        }

    },

    cookiesPerHour: function () {
        for (var x = 0; x <= 13; x++) {
            var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
            this.totalCookiesPerHour.push(totalPerHour);
        }

    },

    sumCookies: function () {
        var sum = this.totalCookiesPerHour[0];
        for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
            sum = sum + this.totalCookiesPerHour[index];
        }

        return seattle.cookiesTotalSum = sum;
    }


}

seattle.generateRandomNum();
seattle.cookiesPerHour();
seattle.sumCookies();
//console.log(seattle.cookiesTotalSum);

var tokyo = {
    maxNumCust: 24,
    minNumCust: 3,
    cookieAvg: 1.2,
    randomNum: [],
    totalCookiesPerHour: [],
    cookiesTotalSum: 0,
    generateRandomNum: function () {
        for (var i = 1; i <= 14; i++) {
            var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
            this.randomNum.push(numPerHour);

        }

    },

    cookiesPerHour: function () {
        for (var x = 0; x <= 13; x++) {
            var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
            this.totalCookiesPerHour.push(totalPerHour);
        }

    },
    sumCookies: function () {
        var sum = this.totalCookiesPerHour[0];
        for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
            sum = sum + this.totalCookiesPerHour[index];
        }

        return tokyo.cookiesTotalSum = sum;
    }


}

tokyo.generateRandomNum();
tokyo.cookiesPerHour();
tokyo.sumCookies();

var dubai = {
    maxNumCust: 38,
    minNumCust: 11,
    cookieAvg: 3.7,
    randomNum: [],
    totalCookiesPerHour: [],
    cookiesTotalSum: 0,
    generateRandomNum: function () {
        for (var i = 1; i <= 14; i++) {
            var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
            this.randomNum.push(numPerHour);

        }

    },
    cookiesPerHour: function () {
        for (var x = 0; x <= 13; x++) {
            var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
            this.totalCookiesPerHour.push(totalPerHour);
        }

    },
    sumCookies: function () {
        var sum = this.totalCookiesPerHour[0];
        for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
            sum = sum + this.totalCookiesPerHour[index];
        }

        return dubai.cookiesTotalSum = sum;
    }

}

dubai.generateRandomNum();
dubai.cookiesPerHour();
dubai.sumCookies();

var paris = {
    maxNumCust: 38,
    minNumCust: 20,
    cookieAvg: 2.3,
    randomNum: [],
    totalCookiesPerHour: [],
    cookiesTotalSum: 0,
    generateRandomNum: function () {
        for (var i = 1; i <= 14; i++) {
            var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
            this.randomNum.push(numPerHour);

        }

    },
    cookiesPerHour: function () {
        for (var x = 0; x <= 13; x++) {
            var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
            this.totalCookiesPerHour.push(totalPerHour);
        }

    },
    sumCookies: function () {
        var sum = this.totalCookiesPerHour[0];
        for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
            sum = sum + this.totalCookiesPerHour[index];
        }

        return paris.cookiesTotalSum = sum;
    }

}

paris.generateRandomNum();
paris.cookiesPerHour();
paris.sumCookies();

var lima = {
    maxNumCust: 16,
    minNumCust: 2,
    cookieAvg: 4.6,
    randomNum: [],
    totalCookiesPerHour: [],
    cookiesTotalSum: 0,
    generateRandomNum: function () {
        for (var i = 1; i <= 14; i++) {
            var numPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
            this.randomNum.push(numPerHour);

        }

    },
    cookiesPerHour: function () {
        for (var x = 0; x <= 13; x++) {
            var totalPerHour = parseInt(this.cookieAvg * this.randomNum[x]);
            this.totalCookiesPerHour.push(totalPerHour);
        }

    },
    sumCookies: function () {
        var sum = this.totalCookiesPerHour[0];
        for (var index = 1; index < this.totalCookiesPerHour.length; index++) {
            sum = sum + this.totalCookiesPerHour[index];
        }

        return lima.cookiesTotalSum = sum;
    }

}

lima.generateRandomNum();
lima.cookiesPerHour();
lima.sumCookies();

//find cookies sum total for all locations:

//var theCountr = [seattle, tokyo, dubai, paris, lima]
var cookiesPerLocation = [seattle.totalCookiesPerHour, tokyo.totalCookiesPerHour, dubai.totalCookiesPerHour, paris.totalCookiesPerHour, lima.totalCookiesPerHour]
var parentElement = document.getElementById('cookiesPerHourList');
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ',]
var locationNames = [seattle, tokyo, dubai, paris, lima];
var locationNamesString = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
//create list for each location:
for (var index = 0; index < cookiesPerLocation.length; index++) {
    var theLocation = cookiesPerLocation[index];
    //create ul for each location with a heading:
    var list = document.createElement('ul');
    parentElement.appendChild(list);
    var locationName = document.createElement('h2')
    locationName.textContent = locationNamesString[index];
    list.appendChild(locationName);
    //loop through the number of cookies for each loaction:
    for (var l = 0; l <= 13; l++) {
        var listItem = document.createElement('li');
        listItem.textContent = hours[l] + theLocation[l]
        list.appendChild(listItem);

    }
    var listTwo = document.createElement ('li');
   listTwo.textContent = 'Total: '+ locationNames[index].cookiesTotalSum;
    list.appendChild(listTwo);


}








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

// }


