import axios from 'axios'

class GithubInfo {
	getRepos(){
		return axios.get('https://api.github.com/users/' + username + '/repos')
	}
	
}