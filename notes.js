const fs = require ('fs');
const chalk = require('chalk');

const getNotes = (title) => {
    const allNotes= getAllNotes();

    allNotes.forEach((value, index, array) => {

        if (value.title == title){
           console.log(chalk.red.inverse(value.title));
           console.log(chalk.green(value.body));

        }

    })

}


const addNotes =  (title , body) => {

    const allNotes= getAllNotes();
    const duplicate = allNotes.find((note)=>note.title == title);

    console.log(duplicate);

    if (!duplicate) {
        allNotes.push( {
            title : title,
            body : body
        });
        saveNotes(allNotes);
     } else{
        console.log('Duplicate found');
     }

     debugger
  
}

const listAllNotes = ()=>{

    console.log(chalk.red.inverse('Your notes are :'));

    const allNotes= getAllNotes();

    allNotes.forEach((value, index, array) => {

        console.log(chalk.green.inverse(index+1 +  '. '+value.title));


    })

}


const remove = (title) =>{
    const allNotes= getAllNotes();
    const notesToKeep = allNotes.filter( (note) =>{
       return note.title != title;
    });

    if(allNotes.length>notesToKeep.length){
         console.log(chalk.green.inverse('Note removed'));
    } else{
        console.log(chalk.red.inverse('Note not removed'));
    }

    saveNotes(notesToKeep);

}

const saveNotes = (data) =>{
    fs.writeFileSync( 'notes.json',JSON.stringify(data));
}


const getAllNotes = ()=>{
    try{
        return  JSON.parse(fs.readFileSync('notes.json').toString());
    }catch (e) {
        return [];
    }
}


module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    remove : remove,
    listAllNotes : listAllNotes,
    getNotes : getNotes
}