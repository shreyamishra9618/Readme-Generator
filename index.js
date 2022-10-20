
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "kindly give a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Write the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the purpose of this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "Name the contributers of the project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }])
  .then((response) => {
    const readme =`
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/connietran-dev/readme-generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/connietran-dev/readme-generator?style=flat&logo=appveyor)
  
    Check out the badges hosted by [shields.io](https://shields.io/).
  
    # ${response.title}
    
    # Table of Content
    -[description](# description)
    -[installation](# installation)
    -[usage](# usage)
    -[licenses](# licenses)
    -[contribution](# contribution)
    -[test](# test)
    -[username](# username)
   
    
    ## Title: 
    ${response.projectTitle}
    ## username:
    ${response.username}
    
      
    ## description:  
    ${response.description}
    
        
    ## installation:
    ${response.installation}
    
        
    ## usage:
    ${response.usage}
    
       
    ## licenses: 
    ${response.license}
    
       
    ## contribution: 
    ${response.contribution}
    
       
    ## test: 
    ${response.tests}
    
       
    ## email: 
    ${response.email}
    `;

    fs.writeFile("README.md", readme, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });