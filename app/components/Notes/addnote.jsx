import React from 'react';

class AddNotes extends React.Component {

	constructor(){
		super();
		this.setRef = this.setRef.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	setRef(ref){
		this.note = ref
	}
	handleSubmit(){
		let newNote = this.note.value;
		this.note.value = ''
		this.props.addNote(newNote)
	}
	render(){
		return <div className="input-group">
				<form onSubmit={this.handleSubmit}>
					<input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef}/>
					<span className='input-group-btn'>
						<button className="btn btn-default" type="button">Submit</button>
					</span>
				</form>
			</div>
	}
}

AddNotes.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
}

export default AddNotes