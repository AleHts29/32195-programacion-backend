import knex from 'knex'
import config from '../src/config.js'

//------------------------------------------
// productos en MariaDb

try {
    const mariaDbClient = knex(config.mariaDb)

    await mariaDbClient.schema.dropTableIfExists('productos')

    await mariaDbClient.schema.createTable('productos', table => {
        table.increments('id').primary()
        table.string('title', 30).notNullable()
        table.float('price').notNullable()
        table.string('thumbnail', 1024)
    })

    await mariaDbClient.destroy()

    console.log('tabla productos en mariaDb creada con éxito')
} catch (error) {
    console.log('error al crear tabla productos en mariaDb')
    console.log(error)
}
