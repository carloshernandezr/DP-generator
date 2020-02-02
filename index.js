var inquirer =require("inquirer");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const puppeteer = require("puppeteer");
const generateHTML = require("./generateHTML");
const writeFile = util.promisify(fs.writeFile);


// inquirer
// .prompt([{
//     type: "input",
//     message: "what is your github username:",
//     name: "username"
// },

// {
//     type: "input",
//     message: "What is your favorite color?",
//     name: "favoriteColor"
// }
// ])
//   .then(function(response) {

//     if (response.confirm === response.password) {
//       console.log("Success!");
//     }
//     else {
//       console.log("You forgot your password already?!");
//     }
//   });
 

  function QuestionUsername() {
    const usernameQ = inquirer.prompt({
      type: "input",
      message: "Enter your GitHub username:",
      name: "username",
    });
    return usernameQ;
  }

  // function to get color input from user and return input as color
function QuestionColor() {
    const color = inquirer.prompt({
      type: "rawlist",
      name: "color",
      message: "What is your favorite color?",
      choices: ["green", "blue", "pink", "red"],
    });
    return color;
  }


  // function to run axios API call using username as parameter for search, returns API call info as data
function getData(username) {
    let data = axios.get(`https://api.github.com/users/${usernameQ}`);
    return data;
  }
  











  