const fs = require ('fs');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require ('./notes');


yargs.version('1.1.0');

yargs.command({
    command : 'add',
    describe : 'Add new note',

    handler : {
        title : {
            describe : 'Give note title',
            demandOption: true,
            type : 'String'
        },
        body : {
            describe : 'Give note body',
            demandOption: true,
            type : 'String'
        }
    },

    handler(argv){
       
        notes.addNotes(argv.title , argv.body);

    }
});

yargs.command({
    command : 'remove',
    describe : 'removing note',

    handler : {
        title : {
            describe : 'removeNode',
        
        }
    },

    handler (argv){
        notes.remove(argv.title);
    }
});
yargs.command({
    command : 'list',
    describe : 'list notes',
    handler  (){
        notes.listAllNotes();
    }
});
yargs.command({
    command : 'read',
    describe : 'Reading notes',
    builder :{

        title :{
            
        }

    },
    handler  (argv){
        notes.getNotes(argv.title);
    }
});

yargs.parse()