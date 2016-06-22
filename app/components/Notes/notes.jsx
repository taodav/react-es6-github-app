import React from 'react'
import NotesList from './noteslist.jsx'

class Notes extends React.Component {
	render(){
		return <div>
			<h3>Notes for {this.props.username}</h3>
			<NotesList notes={this.props.notes} />
		</div>
	}
}


export default Notes