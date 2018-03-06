const User = require('../models/User.js')
ParkComment = require('../models/ParkComment.js')

const signToken = require('../serverAuth.js').signToken
//import the signToken function,create signed tokens 
//when the user create and user authenticate actions in our controller are accessed. 

module.exports = {
	// list all users
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

    //get one user
    show: (req, res) => {
		console.log("Current User:")
		console.log(req.user)
		User.findById(req.params.id, (err, user) => {
			res.json(user)
		})
	},

    //create a new user
    create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err) return res.json({success: false, code: err.code})
			// once user is created, generate a token to "log in":                       //**** NEW CODE  *****
			const token = signToken(user) 							 					 //**** NEW CODE  *****
			res.json({success: true, message: "User created. Token attached.", token})   //**** NEW CODE  *****
		})
	},


    // update an existing user
    update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				const token = signToken(updatedUser)
				res.json({success: true, message: "User updated.", token})
			})
		})
	},

    //delete an existing user
    destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			ParkComment.remove({by: req.params.id}, function(err, data){
				res.json({success: true, message: "User deleted.", user})
			})
		})
	},

    //login
    authenticate: (req, res) => {
		// check if the user exists
		User.findOne({email: req.body.email}, (err, user) => {
			// if there's no user or the password is invalid
			if(!user || !user.validPassword(req.body.password)) {
				// deny access
				return res.json({success: false, message: "Invalid credentials."})
			}

			const token = signToken(user)								  //**** NEW CODE  *****
			res.json({success: true, message: "Token attached.", token})  //**** NEW CODE  *****
		})
	}
}