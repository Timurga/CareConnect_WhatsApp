const redis = require('redis');
const { whatsappSentMessage } = require('../whatsappService');
const myEmitter = require('../eventEmitter');

async function redisSub() {

  const client = redis.createClient();

  const subscriber = client.duplicate();

  await subscriber.connect();

  await subscriber.subscribe('article', (message) => {
    myEmitter.emit('event', JSON.parse(message))
  });

}

redisSub();

module.exports = {redisSub}
