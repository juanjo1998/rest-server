const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello Friend")
})

app.listen(port, () => console.log(`Server listening on port: ${port}`))