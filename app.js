require('colors');

const {inquirerMenu, pausa, readInput, confirmMessage, subMenuTasks, showCheckListTasks} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
const {saveInDB, readDB} = require('./models/db');
console.clear();

const main = async () => {
    let opt = '';
    const tasks = new Tasks();
    tasks.setTasks(readDB());
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // create task
                const description = await readInput('Please insert the descripction for the task: ')
                tasks.createTask(description);
                break;
            case '2':
                console.log(tasks.getList);
                break;
            case '3':
                tasks.TaskCompletedList();
                break;
            case '4':
                tasks.TaskPendingList();
                break;
            case '5':
                const taskId = await subMenuTasks(tasks.getList, 'This is the task. Did you complete it?');
                const answer = await confirmMessage('Are you sure?');

                if (answer) {
                    tasks.completeTask(taskId);
                }
                break;
            case '6':
                const ids = await showCheckListTasks(tasks.getList);
                const confirm = await confirmMessage('Are you sure?');

                if (confirm) {
                    tasks.deleteTask(ids);
                }

                break;
        }
        saveInDB(tasks.getList);
        await pausa();
    } while (opt !== '0');
}

main();