const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flashcardSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
 
    }
},
    {
        timestamps: true
    })


var Flashcards = mongoose.model('FlashCard', flashcardSchema)

module.exports = Flashcards