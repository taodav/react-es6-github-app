import React from 'react'

class Repos extends React.Component {
	render(){
		let repos = this.props.repos.map(function(repo, index){
			return <li className="list-group-item" key={index}>
					{repo.html_url && <a href={repo.html_url}>{repo.full_name}</a>}
					{repo.description && <p>{repo.description}</p>}
				</li>
		})
		return <div>
			<h3>User Repos</h3>
			<ul className="list-group">
				{repos}
			</ul>
		</div>
	}
}

Repos.propTypes = {
	username: React.PropTypes.string.isRequired,
	repos: React.PropTypes.array.isRequired
}

export default Repos