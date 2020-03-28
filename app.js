const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//add-Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log(chalk.blue.inverse.bold('Adding a new note'), argv)
        notes.addNote(argv.title, argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function () {
        console.log(chalk.green.inverse.bold('Reading a new note'))
    }
})

//list
    yargs.command({
        command: 'list',
        describe: 'List all notes',
        handler: function () {
            console.log(chalk.yellow.inverse.bold('Listing all notes'))
        }
    })


yargs.parse()