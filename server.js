const express = require('express')
const app = express()

const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/api', (req, res) => {
    res.sendFile('./testApi/tempTest.json', (req, res) => {
        res.send(Error)
    })
})

app.listen(port, function () {
    console.log(`listening on port:${port}`)
})
