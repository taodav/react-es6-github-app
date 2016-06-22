import React from 'react'

class UserProfiles extends React.Component {
	render(){
		return <div>
			<p>Username: {this.props.username}</p>
			<p>Bio: {this.props.bio}</p>
		</div>
	}
}

export default UserProfiles