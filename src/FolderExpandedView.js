import React from 'react';

export default function FolderExpandedView({folders,notes,matchProps}) {
  let noteId = matchProps.match.params.noteId; 
  let folderIdFound = notes.find(note => noteId === note.id).folderId;
  let folder = folders.find(folder => folder.id === folderIdFound);
  console.log(folder);

  return(
    <div>
      <button type="button" onClick={() => matchProps.history.goBack()}>Go back</button>
      <h3>Folder {folder.name}</h3>
    </div>
  );
}