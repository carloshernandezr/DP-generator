var inquirer =require("inquirer");


inquirer
.prompt([{
    type: "input",
    message: "what is your github username:",
    name: "username"
},

{
    type: "input",
    message: "What is your favorite color?",
    name: "favoriteColor"
}
])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });