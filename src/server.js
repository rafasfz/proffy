const express = require('express') // importando express
const server = express() // criando server

server.use(express.static("public")) // usando a pasta 'public' pra usar nas páginas html

.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/index.html')
})

.get("/study", (req, res) => res.sendFile(__dirname + '/views/study.html'))

.get("/give-classes", (req, res) => res.sendFile(__dirname + '/views/give-classes.html'))

.listen(5500)