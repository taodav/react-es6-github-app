import React from 'react';
import {hashHistory} from 'react-router';

class SearchGithub extends React.Component {
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getRef = this.getRef.bind(this)
	}

	handleSubmit(){
		let username = this.usernameRef.value;
		this.usernameRef.value = '';
		hashHistory.push('/profile/' + username)
	}

	getRef(ref){
		this.usernameRef = ref
	}

	render(){
		return <div className="col-sm-12">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref={this.getRef} />
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search Github</button>
					</div>
				</form>
			</div>
	}
};


export default SearchGithub;