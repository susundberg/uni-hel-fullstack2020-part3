const mongoose = require('mongoose')

const nargs = process.argv.length
console.log("Nparams:", nargs)
if (nargs < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]


const url = `mongodb+srv://nodejs:${password}@cluster0-rirsq.mongodb.net/test?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (nargs == 3) {
  console.log('phonebook:')

  Person.find({}).then(result => {
    result.forEach(loop => {
      console.log(`${loop.name} ${loop.number}`)
    })
    console.log('End of list.')
    mongoose.connection.close()
  })
}
else if (nargs == 5) {
  const name = process.argv[3]
  const number = process.argv[4]

  const pers = new Person({ name, number })
  pers.save().then(response => {
    console.log(`added ${name} ${number} to phonebook!`)
    mongoose.connection.close()
  })
}
else {
  console.log('Invalid number of parameters')
}

