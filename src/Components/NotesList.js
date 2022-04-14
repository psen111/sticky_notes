import Note from "./Note.js";


const NotesList = ({ isgrouped, notes, handleAddNote, handleDeleteNode, editNote, isSorted }) => {



    return (
        !isgrouped && isSorted ?
            <div className="notes-list">
                {notes.map((note) =>

                    <Note editNoteHandler={editNote} id={note.id} text={note.text} date={note.date} handleDeleteNode={handleDeleteNode} group={note.group} author={note.author} coloridx={note.colorIdx} />

                )}

            </div >
            :
            <div className="notes-list">
                {notes.map((note) =>

                    <Note editNoteHandler={editNote} id={note.id} text={note.text} date={note.date} handleDeleteNode={handleDeleteNode} group={note.group} author={note.author} coloridx={note.colorIdx} />

                )}

            </div>

    )
}

export default NotesList;