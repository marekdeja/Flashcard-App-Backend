const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flashcardSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    translations: {
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0
 
    }
},
    {
        timestamps: true
    })


var Flashcards = mongoose.model('FlashCard', flashcardSchema)

module.exports = Flashcards