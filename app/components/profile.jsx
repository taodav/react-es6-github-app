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
  componentWillReceiveProps(nextProps) {
    this.unbind('notes')
    this.init(nextProps.params.username)
  }
  init(username){
    this.firebaseRef = firebase.database().ref(username + '/notes')
    this.bindAsArray(this.firebaseRef, 'notes');
    helpers.getGithubInfo(username).then(function(data){
      this.setState({
        bio: data.bio,
        repos: data.repos
      })
    }.bind(this))
  }
  componentDidMount(){
      this.init(this.props.params.username)
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