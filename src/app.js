const redisSubscriber = require('./redis/redisSubscriber');

function startApp() {
 redisSubscriber.redisSub()
}

module.exports = {
  startApp,
};
