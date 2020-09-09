const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

// This is a function that creates the array of questions for the user
function promptUser() {
  return inquirer.prompt([
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
      message: "How would you like your application to be used?",
      name: "usage",
    },
    {
      type: "input",
      message: "How can people contribute to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "What are the test instructions?  Write NONE if no test instructions.",
      name: "tests",
    },
    {
      type: "checkbox",
      message: "Please select a license",
      choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
      name: "license",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
  ]);
}

// Creating a function to initialize program
async function init() {
  try {
    const response = await promptUser();
    const readMe = generateMarkdown(response);

    await writeFile("README.md", readMe);
    console.log("File created successfully!");
  } catch (err) {
    console.log(err);
  }
}

// Calling init function to run the program
init();
