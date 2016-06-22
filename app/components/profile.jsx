import React from 'react';
import Router from 'react-router';
import Repos from './Github/repos.jsx'
import UserProfiles from './Github/userprofile.jsx'
import Notes from './Notes/notes.jsx'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import firebase from 'firebase'
import helpers from '../utils/helpers.jsx'

class Profile extends React.Component {
	constructor(){
        super();
        this.state = {
            notes: [],
            bio: [],
            repos: []
        };
        this.handleAddNote = this.handleAddNote.bind(this);
    }
  componentDidMount(){
      var config = {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET
      };
      firebase.initializeApp(config);
      this.firebaseRef = firebase.database().ref(this.props.params.username + '/notes')
      this.bindAsArray(this.firebaseRef, 'notes');
      helpers.getGithubInfo(this.props.params.username).then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  }

  componentWillUnmount(){
      this.unbind('notes')
  }

  handleAddNote(newNote){
    firebase.database().ref(this.props.params.username + "/notes/" + this.state.notes.length).set(newNote)
  }

  render(){
    return(
        <div className="row">
          <div className="col-md-4">
            <UserProfiles username={this.props.params.username} bio={this.state.bio} />
          </div>
          <div className="col-md-4">
            <Repos username={this.props.params.username} repos={this.state.repos} />
          </div>
          <div className="col-md-4">
            <Notes 
            addNote={this.handleAddNote}
            username={this.props.params.username} 
            notes={this.state.notes} />
          </div>
        </div>
      )
  }
}

reactMixin(Profile.prototype, ReactFireMixin)

export default Profile