import Note from "./Note.js";
import { Droppable, Draggable } from "react-beautiful-dnd";

const NotesList = ({ isgrouped, notes, handleAddNote, handleDeleteNode, editNote, group }) => {



    return (
        isgrouped ?

            <div>
                <Droppable
                    droppableId={group}
                    direction="horizontal"
                    isCombineEnabled={false}
                >
                    {dropProvided => (
                        <div
                            {...dropProvided.droppableProps}
                            ref={dropProvided.innerRef}
                            className="notes-list">
                            {notes.map((note, index) => (
                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                    {dragProvided => (
                                        <div
                                            {...dragProvided.dragHandleProps}
                                            {...dragProvided.draggableProps}
                                            ref={dragProvided.innerRef}
                                        >
                                            <Note isgrouped={isgrouped} editNoteHandler={editNote} id={note.id} text={note.text} date={note.date} handleDeleteNode={handleDeleteNode} group={note.group} author={note.author} coloridx={note.colorIdx} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {dropProvided.placeholder}
                        </div >
                    )}
                </Droppable>
            </div>
            :
            <div>

                <div className="notes-list">
                    {notes.map((note) => (


                        <Note isgrouped={isgrouped} editNoteHandler={editNote} id={note.id} text={note.text} date={note.date} handleDeleteNode={handleDeleteNode} group={note.group} author={note.author} coloridx={note.colorIdx} />
                    ))}
                </div>

            </div>

    );
};

export default NotesList;