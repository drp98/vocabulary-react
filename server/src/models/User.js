const { Schema, model, Types } = require('mongoose')

const schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        words: [
            {
                type: Types.ObjectId,
                ref: 'Word'
            }
        ]
    }, {
        collection: 'users'
    }
)

module.exports = model('User', schema)