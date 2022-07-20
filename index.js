const express = require ('express')

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
  })

  