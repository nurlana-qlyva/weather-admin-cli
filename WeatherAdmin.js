var fs = require("fs");
var inquirer = require('inquirer');
var UserSearch = require("./UserSearch.js");
var weather = require("weather-js");
var moment = require('moment');

var search = new UserSearch();

function Weather() {
  this.getData = function () {
    fs.readFile("log.txt", "utf-8", function (error, data) {
      if (error) {
        return console.log(error);
      }
      var commandArray = data.split("\n");

      for(let i of commandArray) {
        console.log("-------------------------------------------------------------------");
        console.log(i);
        console.log("-------------------------------------------------------------------");
      }
    });
  };

  this.newUserSearch = function () {
    inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name"
      },
      {
        type: "input",
        message: "Location:",
        name: "location"
      }
    ]).then(function (response) {
      search.addUser(response.name, response.location, moment().add(10, 'days').calendar());

      for(let i of search.listOfUsers){
        console.log(i);
      }

      weather.find({ search: response.location, degreeType: "C" }, function (err, result) {
        if (err) {
          return console.log(err);
        }

        var resultJSON = JSON.stringify(result[0].current, null, 3);
        console.log(resultJSON)

      });
    });
  };
};

module.exports = Weather;