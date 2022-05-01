require('colors');

const showMenu = () => {
    console.clear();
    return new Promise((resolve) => {
        console.log('========================='.green);
        console.log('||   Choose an option  ||');
        console.log('=========================\n'.green);

        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List all task`);
        console.log(`${'3.'.green} List completed task`);
        console.log(`${'4.'.green} List pending task`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} exit`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Please. Choose an option: ', (opt) => {

            readline.close();
            resolve(opt);
        });
    });
}

const pausa = () => {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Dear user, press ${'ENTER'.green} to continue`, (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

module.exports = {
    showMenu,
    pausa
}