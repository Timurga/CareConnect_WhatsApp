const dbClient = require('./postgresSerivce')

const createUser = async (userId) => {
    const query = {
        name: 'create-user',
        text: 'INSERT INTO users(whatsapp_id) VALUES($1)',
        values: [userId],
    }
    
    await dbClient.query(query)

    console.log('\nПользователь с ID ' + userId + ' добавлен в БД');

    return true
}

module.exports = { createUser }