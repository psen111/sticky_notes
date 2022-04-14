import { createContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
const notes = [
    {
        id: nanoid(),
        text: "This is my first note",
        date: "13/04/2022",
        group: "1",
        author: "Joseph",
        colorIdx: 0
    },
    {
        id: nanoid(),
        text: "This is my second note",
        date: "13/04/2022",
        group: "2",
        author: "Maverick",
        colorIdx: 1
    },
    {
        id: nanoid(),
        text: "This is my third note",
        date: "13/04/2022",
        group: "3",
        author: "Brock",
        colorIdx: 2
    }
];

const AllnotesContext = createContext({
    notes: [],
    totalnotes: 0,
    addNote: (text, group) => { },
    saveNote: (newNote) => { },
    deleteNode: (id) => { },

});

export function AllnotesContextProvider(props) {
    const [userAllnotes, setNotes] = useState(notes);
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

        if (savedNotes) {
            setNotes(savedNotes);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
    }, [userAllnotes]);
    //function to change the favorite status of a project
    const addNote = (text, group, author) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
            group: group,
            author: author,
            //take a random no between 0 and 9
            colorIdx: Math.floor(Math.random() * 10)
        };

        const newNotes = [...userAllnotes, newNote];
        setNotes(newNotes);
    }

    const deleteNode = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }
    //create a function to edit a project
    const saveNote = (newNote) => {
        //print all the newNote values
        // console.log(newNote);
        const newNotes = notes.map((note) => {
            if (note.id === newNote.id) {
                note.text = newNote.text;
                note.group = newNote.group;
                note.author = newNote.author;
                note.colorIdx = newNote.colorIdx;
            }
            return note;
        });
        localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes))
        setNotes(newNotes);
    }

    const context = {
        notes: userAllnotes,
        totalnotes: userAllnotes.length,
        addNote: addNote,
        deleteNode: deleteNode,
        saveNote: saveNote,


    };

    return (
        <AllnotesContext.Provider value={context}>
            {props.children}
        </AllnotesContext.Provider>
    );
}

export default AllnotesContext;
