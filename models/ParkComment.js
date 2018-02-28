const
    mongoose = require ('mongoose'),
    parkCommentSchema = new mongoose.Schema({
        body: {type: String},
        parkCode: {type: String},
        by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    })

const ParkComment = mongoose.model('ParkComment', parkCommentSchema)
module.exports = ParkComment