var inquirer = require('inquirer');
var Weather = require('./WeatherAdmin.js')

var WeatherAdmin = new Weather()

var CLI = function () {
    inquirer.prompt([
        {
            name: "choice",
            message: "User or Admin?",
            type: "list",
            choices: ["User", "Admin"],
        }
    ]).then(function (response) {
        if (response.choice === "User") {
            WeatherAdmin.newUserSearch();
        } else if (response.choice === "Admin") {
            inquirer.prompt([
                {
                    type: "password",
                    message: "Enter Password for Access:",
                    name: "confirmPassword"
                }
            ]).then(function (response) {
                if (response.confirmPassword === "admin") {
                    admin = true;
                    console.log("\nAccess Granted.\n");
                    WeatherAdmin.getData();
                }
                else {
                    console.log("\nIncorrect Password. Access Denied.\n");
                }
            });
        }
    });
}

CLI();