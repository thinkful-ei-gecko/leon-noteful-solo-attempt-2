import React from 'react';
import FolderItem from './FolderItem'
import {Link} from 'react-router-dom'
import './FolderClass.css'

export default function FolderList({folders, matchProps}) {
  let folderId = matchProps.match.params.folderId;
  let folderClass = 'folder';
  return(
    <ul>
      {folders.map(folder => {
        (folderId === folder.id ? folderClass = 'active' : folderClass = 'folder')
      return <Link to={`/folder/${folder.id}`}><FolderItem key={folder.id} name={folder.name} className={folderClass} /></Link>
      })}
    </ul>
  )
}