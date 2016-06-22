import React from 'react'
import Main from '../components/main.jsx'
import Home from '../components/home.jsx'
import {Router, Route, Link, IndexRoute} from 'react-router'
import Profile from '../components/profile.jsx'

const routes = () => 
	<Route path="/" component={Main}>
		<Route path="profile/:username" component={Profile} />
		<IndexRoute component={Home} />
	</Route>


export default routes()