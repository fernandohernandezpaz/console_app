const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you do?',
        choices: [{
            value: '1',
            name: `${'1'.green}. Create task`
        }, {
            value: '2',
            name: `${'2'.green}. List all task`
        }, {
            value: '3',
            name: `${'3'.green}. List completed task`
        }, {
            value: '4',
            name: `${'4'.green}. List pending task`
        }, {
            value: '5',
            name: `${'5'.green}. Complete task(s)`
        }, {
            value: '6',
            name: `${'6'.green}. Delete task`
        }, {
            value: '0',
            name: `${'0'.green}. Exit`
        }]
    }

];


const inquirerMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('||   Choose an option  ||');
    console.log('=========================\n'.green);


    const {option} = await inquirer.prompt(questions)
    return option;
}

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue!`
        }
    ]
    await inquirer.prompt(question);
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (!value.length) {
                    throw 'Please insert the correct value!';
                }

                return true;
            }
        }
    ]
    const {description} = await inquirer.prompt(question);
    return description;
}

const subMenuTasks = async (tasks = [], message= 'Delete task?') => {
    const choices = tasks.map((task, i) => ({
        value: task.id,
        name: `${i + 1}. `.green + `${task.description}.`
    }));

    const questions = [{
        type: 'list',
        name: 'id',
        message,
        choices
    }];

    const {id} = await inquirer.prompt(questions);

    return id;
}

const confirmMessage = async (message)=> {
    const questions = [{
        type: 'list',
        name: 'answer',
        message,
        choices: [{
            value: true,
            name: 'Yes'
        },{
            value: false,
            name: 'No'
        }]
    }];

    const {answer} = await inquirer.prompt(questions);
    return answer;
}

const showCheckListTasks = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
      return {
          value: task.id,
          name: `${i + 1}. ${task.description}.`,
          checked: task.completed ? true: false
      };
    });
    const question =[
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select the task.',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(question);
    return ids;

}


module.exports = {
    inquirerMenu,
    pausa,
    readInput,
    subMenuTasks,
    confirmMessage,
    showCheckListTasks
}