import React from 'react';

export default function NoteExpandedView({notes,matchProps}) {
  let noteId = matchProps.match.params.noteId; 
  let note = notes.find(note => noteId === note.id)
  return(
    <div>
      <h2>{note.name}</h2>
      <p>{note.modified}</p>
      <p>{note.content}</p>
    </div>
  );
}