const Task = require('./task');

/**
 *
 * _listado:
 *          {
 *          'uuid-123712-1': {id: 'xxxx', description: 'xxxxx...', completed: null},
 *          'uuid-223712-2': {id: 'yxxxx', description: 'xyxxxx...', completed: false},
 *          }
 *
 * **/
class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    get getList() {
        return Object.values(this._list);
    }

    createTask(description = '') {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    setTasks(tasks = []) {
        tasks.forEach((task) => {
            this._list[task.id] = task;
        });
    }

    TaskCompletedList() {
        this.getList
            .filter(task => task.completed)
            .forEach((task, i) => {
                const index = `${i + 1}`.blue;
                const {description} = task;
                const statusName = 'Completed'.green;
                console.log(`${index}. ${description} :: ${statusName}`);
            });
    }

    TaskPendingList() {
        this.getList
            .filter(task => !task.completed)
            .forEach((task, i) => {
                const index = `${i + 1}`.blue;
                const {description} = task;
                const statusName = 'Pending'.red;
                console.log(`${index}. ${description} :: ${statusName}`);
            });
    }

    completeTask(id) {
        this._list[id]['completed'] = true;
        this._list[id]['completed_at'] = new Date();
        console.log('Task completed!');
    }

    deleteTask(ids = []) {
        ids.forEach(id => {
            delete this._list[id];
            console.log(`Task ${id} deleted!`);
        });

    }
}

module.exports = Tasks;