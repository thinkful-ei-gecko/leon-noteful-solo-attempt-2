import React from 'react';
import NoteItem from './NoteItem'

export default function NotesList({notes}) {
  return(
    <ul>
      {notes.map(note => <NoteItem key={note.id} {...note}  />)}
    </ul>
  );
}