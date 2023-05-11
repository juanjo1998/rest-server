const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        // api users
        this.usersPath = '/api/users'

        // middlewares
        this.middlewares()

        // routes
        this.routes()
    }

    middlewares() {
        // public directory
        this.app.use(express.static('public'))

        // cors
        this.app.use(cors())

        // read and parse body
        this.app.use(express.json())
    }

    routes() {
        // get
        this.app.use(this.usersPath, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server listening on port: ${this.port}`))
    }

}

module.exports = Server