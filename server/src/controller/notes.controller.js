const Notes = require('../models/notes.model');

async function createNote(req, res){
    try {
        const {text} = req.body;
        const newNote = new Notes({
            text,
            user: req.usertoken,
        });

        await newNote.save();
        res.status(201).json(newNote);
        
    } catch (error) {
        res.status(500).json({ message: 'Error creating note', error });
    }
    //creating a note
}

async function getNote(req, res){
    try {
        const note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found', error });
        }
        res.status(500).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching note', error });
    }
    //get single note
}

async function getAllNotes(req, res){
    try {
        const notes = await Notes.find({ user: req.usertoken });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error });
    }
    //get all notes
}

async function updateNote(req, res){
    try {
        const { text } = req.body;
        const updatedNote = await Notes.findByIdAndUpdate(req.params.id, { text }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error updating note', error });
    }
    //Update a note
}

async function deleteNote(req, res){
    try {
        const deletedNote = await Notes.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note', error });
    }
    //delete a note
}

module.exports = {
    createNote,
    getNote,
    getAllNotes,
    updateNote,
    deleteNote
}