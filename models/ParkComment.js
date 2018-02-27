const
    mongoose = require ('mongoose'),
    ParkCommentSchema = new mongoose.Schema({
        body: {type: String},
        by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

    })

const ParkComment = mongoose.model('ParkComment', ParkCommentSchema)
module.exports = ParkComment