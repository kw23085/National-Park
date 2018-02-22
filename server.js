const 
    dotenv = require('dotenv').load(),
    express = require ('express'),
    app = express(),
    logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pocketparks',
    PORT = process.env.PORT || 3001,
    usersRoutes = require('./routes/users.js'),
    APIKEY = process.env.NP_API_KEY
    request = require('request')



mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))

app.get('/api', (req, res) => {
    request.get(`https://developer.nps.gov/api/v1/parks?api_key=${APIKEY}`, (err, resposne, body) => {
        res.send(body)
    })
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})

//National Park API
