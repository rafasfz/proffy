const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = { 
        name: "Diego Fernandes",
        avatar: "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/57240513_597378804073437_7125075213322027008_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeHLK7N183AcwVHzClt0yPrN4vi8guYhy23i-LyC5iHLbah6b-gG_O6uM0qrOD1OQHaHNrVOhzzdzbj5ieyVm7PL&_nc_ohc=UiXpG1LejGUAX-hYATq&_nc_ht=scontent.fnat1-1.fna&oh=f748b8a481d91b44bb1b92a6b1c33137&oe=5F50D4C9",
        whatsapp: "84998694466",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: 1, 
        cost: "20",
        // O proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados após cadastramos a class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 500, 
            time_to: 1220
        },
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor 
    // e trazeer juntos os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    // console.log(selectClassesAndProffys)

    //  o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horario do time_from (8h) precisar menor ou igual ao horário solciitado
    // o time_to precisa ser a cima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "500"
        AND class_schedule.time_to > "500"
    `)

    // console.log(selectClassesSchedules)
})