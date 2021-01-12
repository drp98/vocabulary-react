import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import words from './routes/words'

const app = express()

dotenv.config({
    path: path.join(__dirname, '.env'),
})

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/api/words', words)
// app.use('/api/auth', auth)
// app.use('/api/films', films)
// app.use('/api/authfilms', authfilms)

const port = process.env.PORT || 4000
const mongoUrl = `${process.env.DB_CONNECTION}`

async function start() {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        app.get('/api/test', (req, res) => {
            res.json({ mes: 'Hello from express' })
        })

        app.listen(port, () =>
            console.log(`App has been started on port ${port}...`)
        )
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
