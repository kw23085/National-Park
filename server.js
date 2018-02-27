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
    request = require('request'),
    User = require ('./models/User.js'),
    ParkComment = require('./models/ParkComment.js')


mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))

app.use(logger('dev'))
app.use(bodyParser.json())
//need a app.use ('/api/parkcomment)

//all the users
app.use('/api/users', usersRoutes)

//get specific nation park api
app.get('/api/:parkCode' ,(req, res) => {
    console.log("hit park code", req.params.parkCode)
    request.get(`https://developer.nps.gov/api/v1/parks?parkCode=${req.params.parkCode}&api_key=${APIKEY}`,(err, resposne, body) => {
        res.send(body)
    })
})

//get nation parks api
app.get('/api', (req, res) => {
    request.get(`https://developer.nps.gov/api/v1/parks?limit=504&start=1&q=national%20park&fields=national%20park&fields=&sort=nationalpark&sort=&api_key=${APIKEY}`, (err, resposne, body) => {
        console.log(body)
        res.send(body)
    })
})




app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})


