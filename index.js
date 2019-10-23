const express = require('express')

const apps = [8000, 8001, 8002, 8003, 8004, 8005].map(port => {
    const app = express()
    app.get('/', function (req, res) {
        console.log('REQUEST:', port)
        res.send('Hello World ' + port)
    })

    app.listen(port)
    console.log('LISTEN:', port)

    return app
})

console.log('Init', 'done...')