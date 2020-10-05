const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type:"input",
        message:"Enter GitHub Username",
        name:"username"
    },
    {
        type:"input",
        message:"Enter Email Address",
        name:"email"
    },
    {
        type:"input",
        message:"Enter Project Title",
        name:"title"
    },
    {
        type:"input",
        message:"Enter Description",
        name:"description"
    },
    {
        type:"list",
        message:"What kind of license do you want your project to have?",
        name:"license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type:"input",
        message:"Enter command that should be run to install dependencies",
        name:"dependencies"
    },
    {
        type:"input",
        message:"Enter command that should be run to run tests",
        name:"tests"
    },
])
.then(function(answers){

const generatedFile = generateMarkdown(answers)

    fs.writeFile("README.md", generatedFile, (err) =>{
        if (err) {
            console.error(err)
            return
        }
    })

})