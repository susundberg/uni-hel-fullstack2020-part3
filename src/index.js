
require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')

const Person = require("./models/Persons")
const PORT = process.env.PORT || 3001

app.use(express.static('build'))
app.use(express.json())



morgan.token('body', (req, res) => req.body)
app.use(morgan((tokens, req, res) => {
  const method = tokens.method(req, res)
  const extra = (method == "POST" | method == "PUT") ? JSON.stringify(tokens.body(req, res)) : ""
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    extra
  ].join(' ')
}))


const errorResponce = (response, msg) =>
  (response.status(400).json({
    error: msg
  }))


app.get('/info', (req, res) => {
  count = Person.count().then(count => {
    const datestr = new Date().toString()
    res.send('<h1>Phonebook has info for ' + count + ' people</h1>' + datestr)
  })
})

app.get('/api/persons', (req, res, next) => {
  Person.find()
    .then(items => {
      res.json(items.map(item => item.toJSON()))
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
  const id = String(request.params.id)

  console.log("Find ID:", id)
  Person.findById(id)
    .then(person => {
      response.json(person.toJSON())
    })
    .catch(error => { console.log("FUUCK ERRRO!"); console.log("next", next); return next(error) })
})


app.put('/api/persons/:id', (request, response, next) => {
  const id = String(request.params.id)
  const body = request.body

  Person.findByIdAndUpdate(id, body, {context: 'query', new: true,  runValidators: true  })
    .then(person => {
      if (person) {
        console.log("Updated", person)
        response.json(person.toJSON())
      }
      else
         errorResponce(response, 'id not found')
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  const id = String(request.params.id)
  Person.findByIdAndRemove(id)
    .then(person => {
      if (person)
        response.status(204).end()
      else
      errorResponce(response, 'id not found')
    })
    .catch(error => next(error))
})


app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (!body)
    return errorResponce(response, 'body missing')

  const check_sanity = (p) => {
    if (p.name.length <= 0)
      return 'invalid name';
    if (p.number.length <= 0)
      return 'invalid number';
    return null
  }

  const person = new Person({
    name: body.name ? body.name.toString() : '',
    number: body.number ? body.number.toString() : '',
  })

  const error_msg = check_sanity(person)
  if (error_msg != null) {
    return errorResponce(response, error_msg)
  }

  person.save()
    .then(dbPerson => { response.json(dbPerson.toJSON()) })
    .catch(error => next(error))
})



const unknownEndpoint = (request, response) => {
  console.log("Unknown endpoint", request)
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {

  console.log("Error name", error.name)
  if (error.name === 'CastError') {
    return errorResponce(response, 'invalid id value')
  } else if (error.name === 'ValidationError') {
    return errorResponce( response, 
      error.message )
  }
  next(error)
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

