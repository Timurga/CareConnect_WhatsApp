const { createUser } = require('./createUser')
const dbClient = require('./postgresSerivce')

const checkUser = async (userId) => {
    const query = {
        name: 'check-user',
        text: 'SELECT * FROM users WHERE whatsapp_id = $1',
        values: [userId],
    }

    const res = await dbClient.query(query)

    if (res.rows[0] === undefined) {
        createUser(userId)
    } else {
        console.log('\nПользователь с ID ' + res.rows[0].whatsapp_id + ' уже существует');
    }
}

module.exports = { checkUser }