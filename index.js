const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

//function that creates the array of questions for the user
function promptUser() {
  return inquirer.prompt(
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a description for your project.",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the installation instructions for this project?  Write NONE if no instructions.",
      name: "installation",
    },
    {
        type: "input",
        message: "How would you like your application to be used?";
        name: "usage"
    },
    
  );
}

promptUser();
