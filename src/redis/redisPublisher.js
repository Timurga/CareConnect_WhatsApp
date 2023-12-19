const redis = require('redis');
const publisher = redis.createClient();

(async () => {

  const article = {
    id: '79196455250',
    name: 'Выберите нужный пункт меню' + '\n' +  '1. Записаться к доктору' + '\n' + '2. Оставить отзыв' + '\n' + '3. Местоположение клиник' + '\n' + '4. Что-то еще',
    blog: 'Logrocket Blog',
  };

  await publisher.connect();

  await publisher.publish('article', JSON.stringify(article));
})();