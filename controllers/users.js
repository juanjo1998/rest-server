const { response, request } = require('express')

const usersGet = (req = request, res = response) => {
    const { nickname = 'nickname default', age = '100' } = req.query

    res.json({
        ok: true,
        msg: "get api",
        nickname,
        age
    })
}

const usersPost = (req, res) => {

    const { name, msg } = req.body

    res.json(
        {
            name,
            msg
        }
    )
}

const usersPut = (req, res) => {
    const id = req.params.id

    res.json({
        id,
        ok: true,
        msg: "put api controller"
    })
}

const usersDelete = (req, res) => {
    res.json({
        ok: true,
        msg: "delete api controller"
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}