const inquirer = require('inquirer');

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
        length: 1,
        validate: function (value) {
            if (!value.match("[0-9]+")) {
                return "Please enter a valid number value."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'days',
        message: 'How many days?',
        length: 1,
        validate: function (value) {
            if (!value.match("[0-9]+")) {
                return "Please enter a valid value."
            }
            return true;
        }
    }
]

inquirer
    .prompt(properties)
    .then(answers => {
        const quoteValue = formatCurrency(answers.days * answers.rate);
        console.log(`The total price for a ${answers.job} for ${answers.days} days would be: £${quoteValue}`);
    })