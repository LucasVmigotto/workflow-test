const { app } = require('./app')

const server = app.listen(4000, () => {
  console.log(`Runnig server at http://localhost:${4000}`)
})

server.once('close', () => app.emit('close'))

server.on('error', err => {
  console.log(err)
  if (err.code === 'EADDRINUSE') {
    server.emit('close')
  }
})

process.once('SIGTERM', () => {
  server.close()
})
