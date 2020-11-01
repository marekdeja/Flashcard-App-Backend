var express = require('express');

const Flashcards = require('../models/flashcardModel');

const flashcardRouter = express.Router();

flashcardRouter.route('/')
    // .options(cors.corsWithOptions, (req, res) => {
    //     res.sendStatus(200)
    // })
    .get((req, res, next) => {
        Flashcards.find({})
            .then((flashcards) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.json(flashcards)
            }, (err) => next(err))
            .catch((err) => next(err))
    })

    .post((req, res, next) => {
        Flashcards.create(req.body)
            .then(flashcard => {
                console.log('Flashcard Created ', flashcard)
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.json(flashcard)
            }, (err) => next(err))
            .catch((err) => next(err))
    })

    .put((req, res, next) => {
        console.log(req.body.flashcardId)
        console.log(req.body.newFlashcard)
        Flashcards.findByIdAndUpdate(req.body.flashcardId, { $set: req.body.newFlashcard }, { new: true })
            .then((flashcard) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.json(flashcard)
            }, (err) => next(err))
            .catch((err) => next(err))
    })

    .delete((req, res, next) => {
        Flashcards.findByIdAndRemove(req.body.flashcardId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.json(resp)
            }, (err) => next(err))
            .catch((err) => next(err))
    })

module.exports = flashcardRouter