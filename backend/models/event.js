const mongoose = require('mongoose')
let Schema = mongoose.Schema

const eventSchema = new Schema(
    {
        eventName:String,
        shortDes:String,
        longDes:String,
        dateTime:String
    }
)

module.exports = mongoose.model('Event', eventSchema)