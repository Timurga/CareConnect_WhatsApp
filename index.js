const { startApp } = require('./src/app');

const { whatsappSentMessage } = require('./src/whatsappService');

// Запуск приложения
whatsappSentMessage()

startApp()