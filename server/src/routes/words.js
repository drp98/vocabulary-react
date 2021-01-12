import express from 'express'
import Word from '../models/word'

const router = express.Router()

router.get('/length', async (req, res) => {
    await Word.countDocuments()
        .then(length => {
            res.json(length)
            console.log(length)
        })
        .catch(err => {
            res.status(500).json({ errors: { global: err } })
            console.log('Caught. Error :', err.message)
        })
})

router.get('/:_id', async (req, res) => {
    await Word.find({ id: req.params._id })
        .then(word => {
            res.json(...word)
        })
        .catch(err => {
            res.status(500).json({ errors: { global: err } })
            console.log('Caught. Error :', err.message)
        })
})

export default router
