'use strict'

const express = require('express')

const app = express()
const port = process.env.PORT || 3001
let counter = 0


app.get('/', (req, res, next) => {
  counter++

  // Fail for every second call
  if (counter % 2 === 0 || counter % 3 === 0 || counter % 4 === 0) {
    res.statusCode = 500
    return res.json({
      status: 'error'
    })
  }

  res.json({
    status: 'ok'
  })
})

app.listen(port, () => {
  console.info(`Server is listening on port ${port}!`)
})
