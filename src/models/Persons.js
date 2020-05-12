const mongoose = require('mongoose')
const mongooseUValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);

const DB_URL = process.env.MONGODB_URI
console.log('Database at ' + DB_URL)

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        required: true,
        unique: true,
    },
    number: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                const ndigits = (v.match(/\d/g) || []).length
                console.log('Validate number:', ndigits)
                return ndigits>=8;
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    }
})



personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
personSchema.plugin(mongooseUValidator);

const Person = mongoose.model('Person', personSchema)


mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

module.exports = Person
