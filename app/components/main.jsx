import React from 'react'
import ReactDOM from 'react-dom'
import SearchGithub from './SearchGithub.jsx'
import firebase from 'firebase'

class Main extends React.Component {
  constructor(){
    super();
    var config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET
    };
    firebase.initializeApp(config);
  }
	render(){
		return (
			<div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
		)
	}
}

export default Main