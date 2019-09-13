import React from 'react';


export default function FolderItem({name, className}) {
  return(
    <li className={className}>
      {name}
    </li>
  )
}