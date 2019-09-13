import React from 'react';

export default function NotesList({name, modified}) {
  return(
    <li>
      <h2>{name}</h2>
      <p>{modified}</p>
    </li>
  );
}