import React from 'react';
import './App.css';
import FolderList from './FolderList'
import NotesList from './NotesList'
import FolderExpandedView from './FolderExpandedView'
import NoteExpandedView from './NoteExpandedView'
import {Route, Link} from 'react-router-dom'

class App extends React.Component {
  state = {
      folders: [],
      notes: []
    }

  componentDidMount() {
    this.getAPI();
  }

  getAPI() {
    Promise.all(
    [fetch('http://localhost:9090/folders')
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('200 status error');
    })
    .catch(e=> console.error(e)),
    fetch('http://localhost:9090/notes')
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('200 status error');
    })
    .catch(e=> console.error(e))])
    .then(([folders, notes]) => {
        this.setState({
          folders,
          notes
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Link to="/"><h1>Noteful</h1></Link>
        <Route exact path ="/" 
          render={(matchProps) =>
            <FolderList folders={this.state.folders} matchProps={matchProps} />
          } 
        />
        <Route path ="/folder/:folderId" 
          render={(matchProps) =>
            <FolderList folders={this.state.folders} matchProps={matchProps} />
          }         />
        <Route path ="/note/:noteId" 
          render={(matchProps) =>
            <FolderExpandedView folders={this.state.folders} notes={this.state.notes} matchProps={matchProps} />
          } 
        />


        <Route exact path ="/" 
          render={(matchProps) =>
            <NotesList notes={this.state.notes} matchProps={matchProps} folders={this.state.folders} />
          }
        />
        <Route path ="/folder/:folderId" 
          render={(matchProps) =>
            <NotesList notes={this.state.notes} matchProps={matchProps} folders={this.state.folders} />
          }         />
        <Route path ="/note/:noteId" 
          render={(matchProps) =>
            <NoteExpandedView notes={this.state.notes} matchProps={matchProps} />
          } 
        />
      </div>
    );
  }
}

export default App;
