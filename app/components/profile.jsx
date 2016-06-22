import React from 'react';
import Router from 'react-router';
import Repos from './Github/repos.jsx'
import UserProfiles from './Github/userprofile.jsx'
import Notes from './Notes/notes.jsx'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import firebase from 'firebase'

class Profile extends React.Component {
	constructor(){
        super();
        this.state = {
            notes: [],
            bio: [],
            repos: []
        }
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
    }

    componentWillUnmount(){
        this.unbind('notes')
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
          <Notes username={this.props.params.username} notes={this.state.notes} />
          </div>
          </div>
          )
  }
}

reactMixin(Profile.prototype, ReactFireMixin)

export default Profile