const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const myEmitter = require('./eventEmitter');
const { checkUser } = require('./db/checkUser');
const dbClient = require('./db/postgresSerivce')

async function whatsappSentMessage(emitter) {
    const client = new Client({
        authStrategy: new LocalAuth()
    })

    // Изначально разкоменть это и скинь мне qr код, либо отсканируй своим телефоном, но тогда нужно будет слать сообщение с какого-нибудь другого

    // client.on('qr', (qr) => {
    //     console.log('QR received', qr)
    // })

    client.initialize()

    dbClient.connect().then(() => console.log('DB connection established'))

    client.on('ready', () => {
        console.log('Whats App service ready')
    })

    myEmitter.on('event', async (message) => {
        await client.sendMessage(`${message.id}@c.us`, `${message.name}`)
    })

    client.on('message', (message) => {
        checkUser(message.from)

        console.log('\n\n\n\nПолучено сообщение от: ' + message.from + '\n' + 'Текст сообщения: ' + message.body);

        switch(message.body) {
            case '1':
                client.sendMessage(message.from, 'Пункт 1')
                break
            
            case '2':
                client.sendMessage(message.from, 'Пункт 2')
                break

            case '3':
                client.sendMessage(message.from, 'Пункт 3')
                break
            
            case '4':
                client.sendMessage(message.from, 'Пункт 4')
                break

            case '0': 
                client.sendMessage(message.from, 'Выберите нужный пункт меню' + '\n' +  '1. Записаться к доктору' + '\n' + '2. Оставить отзыв' + '\n' + '3. Местоположение клиник' + '\n' + '4. Что-то еще')
                break
            
            default:
                client.sendMessage(message.from, 'Unknown command')
                break
        }
    })
}

module.exports = { whatsappSentMessage }