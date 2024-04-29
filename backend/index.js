const express = require('express'),
path = require('path')

const app = express()
const port = process.env.PORT || 3002;


app.get('/api',( _request, response) => {
  response.send({hello: 'World!'})
})

app.get('/hej',( _request, response) => {
  response.send({Hej: 'På Dig!'})
})

app.use(express.static(path.join(path.resolve(), 'dist')))

  app.listen(port, () => {
    console.log(`Lyssnar på http://localhost:${port}`)
  })
