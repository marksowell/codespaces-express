const express = require('express')
const app = express()
const port = 3000
const projectName = process.env.PROJECTNAME

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">Hello World! - ${projectName}</html>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
