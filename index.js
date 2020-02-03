//npm package
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util"); 
var pdf = require('html-pdf');
const generateHTML = require("./generateHTML");
const writeFile = util.promisify(fs.writeFile);


async function init() {
  try {
  
    let { username } = await userNameGet(); 
    const { color } = await colorGet(); 
    
    let { data } = await getData(username);   
    let starCountData = await starsGet(username); 
    let starCount = starCountData.data.length; 
 
    
    data.color = color;  
    data.starCount = starCount; 

    const htmlG =generateHTML(data);
 
    writeFile("index.html", htmlG);

    // create PDf
  
    pdf.create(htmlG).toFile(`${username}.pdf`, function(err, res){
      if (err) return console.log(err);
      console.log(res);
    });


  } catch (err) {
    console.log(err);
  }
  
}

init();

// function  

function getData(username) {
  let data = axios.get(`https://api.github.com/users/${username}`);
  return data;
}

function userNameGet() {
  const username = inquirer.prompt({
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  });
  return username;
}

 
function colorGet() {
  const color = inquirer.prompt({
    type: "rawlist",
    name: "color",
    message: "What is your favorite color?",
    choices: ["green", "blue", "pink", "red"],
  });
  return color;
}

 
function starsGet(username) {
  let starData = axios.get(`https://api.github.com/users/${username}/starred`);  
  return starData;
}
 

 

 
 









  