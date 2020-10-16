const db = require('./db');
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela de
    /*await saveOrphanage(db, {
        lat: "-27.2411324",
        lng: "-49.6101464",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
        whatsapp: "988895504",
        images: [
            "https://images.unsplash.com/photo-1576043061888-8751653f46af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1567701554261-fcc4bda64847?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visita Das 8h as 18h",
        open_on_weekends: "1"
    })*/

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)*/

    //deletar dados da tabela
    /*console.log (await db.run("DELETE FROM orphanages WHERE id = '3'"))*/
})