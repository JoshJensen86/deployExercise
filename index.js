const app = express()
const express = require ('express')

app.get ('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
  })

  