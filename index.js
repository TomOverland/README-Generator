const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

//function that creates the array of questions for the user
function promptUser() {
  return inquirer.prompt({
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  });
}
