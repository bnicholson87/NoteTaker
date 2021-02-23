// let noteData = require('../db/db.json');
const fs = require("fs");
//const { json } = require('express');
const path = require('path');
const noteFile = path.join(__dirname, '../db/db.json')
const uuidv1 = require('node-uuid');
//const { parse } = require("path");
var notes = JSON.parse(fs.readFileSync("db/db.json", "utf-8"));

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        //let noteData = JSON.parse(fs.readFileSync(noteFile, 'utf-8'));
     res.send(notes)
    })
    
    app.post('/api/notes', (req, res) => {
        //let noteData = JSON.parse(fs.readFileSync(noteFile, 'utf-8'));
        //noteData.push(req.body)
        let newNote = req.body;
       // let highestId = 1;
       // if (notes.length){
       //     highestId = Math.max(...notes.map((note) => note.id));
       //     highestId++
      //  }
    
    
        newNote.id = uuidv1();
        notes.push(newNote);
        res.json(notes);
    
        fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    });
    
    app.delete('/api/notes/:id', function(req,res){
        let noteId = req.params.id;
        notes = notes.filter((note) => note.id != noteId);
        console.log(notes);
        res.end("note deleted!");
    })
}