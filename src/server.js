const proffys = [
    { 
        name: "Diego Fernandes",
        avatar: "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/57240513_597378804073437_7125075213322027008_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeHLK7N183AcwVHzClt0yPrN4vi8guYhy23i-LyC5iHLbah6b-gG_O6uM0qrOD1OQHaHNrVOhzzdzbj5ieyVm7PL&_nc_ohc=UiXpG1LejGUAX-hYATq&_nc_ht=scontent.fnat1-1.fna&oh=f748b8a481d91b44bb1b92a6b1c33137&oe=5F50D4C9",
        whatsapp: "84998694466",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "Daniele Evangelista",
        avatar: "https://avatars3.githubusercontent.com/u/42191629?s=460&u=3a623aabb557873d2692756daba74a785849ea79&v=4",
        whatsapp: "985995754",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "Caio carlos",
        avatar: "https://avatars3.githubusercontent.com/u/32200013?s=460&u=3b7d5ca4eefcc60d94aed18eb0c77427c6323301&v=4",
        whatsapp: "985995754",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química'
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render('index.html');
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render('study.html', { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const data = req.query
    
    const isNotEmpty = Object.keys(data).length > 0

    // adicionar data a lista de proffys
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render('give-classes.html', { subjects, weekdays });
}

const express = require('express') // importando express
const server = express() // criando server

// configurar nunjuck
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public")) // usando a pasta 'public' pra usar nas páginas html
// rotdas da aplicação
.get('/', pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)

/*
BASE
server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/index.html')
})
*/