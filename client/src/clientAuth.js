import axios from 'axios'
import jwtDecode from 'jwt-decode'

// During initial app load, instantiate axios, and attempt to set
// a stored token as a default header for all api requests.
const clientAuth = axios.create()
clientAuth.defaults.headers.common.token = getToken()

function getToken() {
	return localStorage.getItem('token')
}

function setToken(token) {
	localStorage.setItem('token', token)
	return token
}

function getCurrentUser() {
	const token = getToken()
	if(token) return jwtDecode(token)
	return null
}

function logIn(credentials) {
	return clientAuth({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then(res => {
			const token = res.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
function signUp(userInfo) {
	return clientAuth({ method: 'post', url: '/api/users', data: userInfo})
		.then(res => {
			console.log(res.data)
			const token = res.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// //update user

function updatedUser(id, fields) {
	return clientAuth({method: 'patch', url: `/api/users/${id}`, data: fields })
		.then(res => {
			const token = res.data.token
			if(token) {
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})		
}

//delete user

function deleteUser(id, fields) {
	return clientAuth({method: 'delete', url:`/api/users/${id}`, data: fields})
}



function logOut() {
	localStorage.removeItem('token')
	delete clientAuth.defaults.headers.common.token
	return true
}

//park comment field

function createComment(fields, parkCode) {
	return clientAuth({ method: 'post', url: '/api/'+ parkCode +'/comments', data: fields })
}


export default {
	getCurrentUser,
	logIn,
	signUp,
	logOut,
	createComment,
	deleteUser,
	updatedUser,
}