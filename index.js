const inquirer = require("inquirer");
const {writeFile} = require("fs").promises;

const {Circle, Triangle, Square} = require("./lib/shapes")

const questions = () => {
    return inquirer.prompt([  
        
        {
            type: "list",
            name: "shape",
            message: "What shape would you like your logo to be?",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like the logo shape to be?"
        },
        
        {
            type: "input",
            name: "text",
            message: "Please enter up to 3 characters for your logo."
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like your logo text to be?"
        },
        
])};

function generateLogo({ shape, shapeColor, text, textColor }) {
    let logoSVG;
    switch (shape) {
        case "Circle":
            logoSVG = new Circle(shapeColor, text, textColor);
            break;
        case "Triangle":
            logoSVG = new Triangle(shapeColor, text, textColor);
            break;
        case "Square":
            logoSVG = new Square(shapeColor, text, textColor);
            break;
            
    }
    writeFile("logo.svg", logoSVG.render())
}

const init = () => {
    questions()
    .then((answers) => generateLogo(answers))
    .then(() => console.log("Generated logo.svg"))
    .catch((err) => console.error(err))
    };

init();