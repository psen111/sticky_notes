import NotesList from "./Components/NotesList";
import {useState } from "react";
import Header from "./Components/Header";
import { useContext } from 'react';
import AllnotesContext from "./store/main-context";
import AddNote from "./Components/AddNote";


const App = () => {
  const notesContext = useContext(AllnotesContext);
  //create  a usestate to track sorted or not
  const [grouped, setGroup] = useState(false);
  const notes = notesContext.notes;
  //crate an object which contains groupname as key and notes as value
  const groupedNotes = {};
  for (let i = 0; i < notes.length; i++) {
    if (groupedNotes[notes[i].group]) {
      groupedNotes[notes[i].group].push(notes[i]);
    } else {
      groupedNotes[notes[i].group] = [notes[i]];
    }
  }
  function setGroupHandler(isg) {
    console.log(isg);
    setGroup(isg);
  }

  const [searchText, setSearchText] = useState('');

  return (
    !grouped?
      <div className="bg-container">
        <div className="container">
          <Header  isgrouped={grouped} setGrouped={setGroupHandler} handleSearchNote={setSearchText} className="container" />

          <NotesList  isgrouped={grouped} notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
            handleAddNote={notesContext.addNote}
            handleDeleteNode={notesContext.deleteNode}
            editNote={notesContext.saveNote}
          />
          <AddNote handleAddNote={notesContext.addNote} />
        </div>
      </div>
      :
      //else traverse through the groupedNotes object and render the notes
      <div className="bg-container">
        <div className="container">
          <Header isgrouped={grouped} setGrouped={setGroupHandler} handleSearchNote={setSearchText} className="container" />

          {Object.keys(groupedNotes).map((group) => {
            return (
              <NotesList notes={groupedNotes[group]}

                handleAddNote={notesContext.addNote}
                handleDeleteNode={notesContext.deleteNode}
                editNote={notesContext.saveNote}
                group={group}
              />
            )
          })}
          <AddNote handleAddNote={notesContext.addNote} />

        </div>
      </div>

  )


}

export default App;