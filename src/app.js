const app = require('express')()

app.get('/', (_, res) => {
  res.send({ message: 'Hello World' })
})

module.exports = {
  app
}
