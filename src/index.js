

const express = require('express')
const app = express()
const morgan = require('morgan')

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.static('build'))

morgan.token('body', function (req, res) { return req.body })
app.use(morgan(function (tokens, req, res) {
  const extra = tokens.method(req, res) == "POST" ? JSON.stringify( tokens.body(req,res) ) : ""

  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    extra 
  ].join(' ')
}))

let DATABASE = {
  "persons": [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}


const error_response = (response, msg) =>
  (response.status(400).json({
    error: msg
  }))

app.get('/info', (req, res) => {
  count = DATABASE["persons"].length
  const datestr = new Date().toString()
  res.send('<h1>Phonebook has info for ' + count + ' people</h1>' + datestr)

})

app.get('/api/persons', (req, res) => {
  res.json(DATABASE["persons"])
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = DATABASE["persons"].find(x => x.id === id)

  if (person) {
    response.json(person)
  } else {
    return error_response(response, 'not found')
  }
})



app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const index = DATABASE["persons"].findIndex(x => x.id === id)

  if (index >= 0) {
    DATABASE["persons"].splice(index)
    response.json({})
  } else {
    return error_response(response, 'not found')
  }
})


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body)
     return error_response(response, 'body missing')
      
  console.log(request.body) 
  const generateId = () => {
    return parseInt(Math.random() * 200000000)
  }

  const check_sanity = (p) => {
    if (p.name.length <= 0)
      return 'invalid name';
    if (p.number.length <= 0)
      return 'invalid number';

    const index = DATABASE["persons"].findIndex(x => x.name.toUpperCase() === p.name.toUpperCase())

    if (index >= 0)
      return 'name must be unique'

    return null

  }



  const person = {
    name: body.name ? body.name.toString() : '',
    number: body.number ? body.number.toString() : '',
    id: generateId(),
  }

  const error_msg = check_sanity(person)
  if (error_msg != null) {
    return error_response(response, error_msg)
  }

  DATABASE["persons"].push(person)
  response.json(person)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

