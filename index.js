const inquirer = require('inquirer');

String.prototype.isNumber = function () { return /^\d+$/.test(this); }

function formatCurrency(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const properties = [
    {
        type: 'list',
        name: 'job',
        message: 'What is your job?',
        choices: [
            'Test Manager',
            'Test Lead',
            'Test Analyst'
        ]
    },
    {
        type: 'input',
        name: 'rate',
        message: 'What is your day rate?',
        validate: function (value) {
            if (String(value).isNumber()) {
                return true;
            }
            return "Please enter a valid number";
        }
    },
    {
        type: 'input',
        name: 'days',
        message: 'How many days?',
        validate: function (value) {
            if (String(value).isNumber()) {
                return true;
            }
            return "Please enter a valid number";
        }
    }
]

inquirer
    .prompt(properties)
    .then(answers => {
        const quoteValue = formatCurrency(answers.days * answers.rate);
        console.log(`The total price for a ${answers.job} for ${answers.days} days would be: £${quoteValue}`);
    })