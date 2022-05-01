const fs = require('fs');

const directory = './db';
const file = `${directory}/data.json`;
const createDir = () => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
}

const saveInDB = (data) => {

    createDir();

    if (typeof (data) !== "string") {
        data = JSON.stringify(data);
    }

    fs.writeFileSync(file, data);
}

const readDB = () => {
    createDir();
    try {

        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, JSON.stringify([]));
        }

        const dataFile = fs.readFileSync(file, {encoding: 'utf-8'});
        return JSON.parse(dataFile);
    } catch (e) {
        return [];
    }
}

module.exports = {
    saveInDB,
    readDB
}