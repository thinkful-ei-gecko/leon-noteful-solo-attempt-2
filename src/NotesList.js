import React from 'react';
import NoteItem from './NoteItem'
import {Link} from 'react-router-dom'

export default function NotesList({notes,matchProps,folders}) {
  //check if matchProps.match.params.folderId matches with a proper folderID
    //if so, then display only those results
    //otherwise, display all

  let folderIdent = matchProps.match.params.folderId;
  let notesMap = notes;
  if (folders.find(folder => folder.id === folderIdent)) {
    notesMap = notes.filter(note => note.folderId === folderIdent);
  }
  return(
    <ul>
      {notesMap.map(note => <Link to={`/note/${note.id}`}><NoteItem key={note.id} {...note}  /></Link>)}
    </ul>
  );
}