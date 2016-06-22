import axios from 'axios'


var getGithubInfo = function(username){
	return axios.all([getRepos(username), getInfo(username)])
		.then(function(arr){
			return {
				repos: arr[0].data,
				bio: arr[1].data
			}
		})
}

function getRepos(username){
	return axios.get('https://api.github.com/users/' + username + '/repos')
}

function getInfo(username){
	return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
	getGithubInfo: getGithubInfo
}

module.exports = helpers