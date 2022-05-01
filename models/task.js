const {v4: uuid4} = require('uuid');

class Task {
    id = '';
    description = '';
    completed = null;
    created_at = null;
    completed_at = null;

    constructor(description) {
        this.id = uuid4();
        this.description = description
        this.created_at = new Date
    }
}

module.exports = Task;