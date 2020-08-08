const PORT = process.env.PORT || 3333

const Database = require('./database/db')

const express = require('express') // importando express
const server = express() // criando server

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configurar nunjuck
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
// Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
.use(express.static("public")) // usando a pasta 'public' pra usar nas páginas html
// rotdas da aplicação
.get('/', pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post('/save-classes', saveClasses)

.listen(PORT)

/*
BASE
server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/index.html')
})
*/