require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('vivek.com')
    console.log('Accessing env variable, PORT = ', process.env.PORT)
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login to continue</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<button>Youtube</button>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})