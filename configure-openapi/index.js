import Koa from 'koa';
import { OreoRouter } from 'oreo-router';

const app = new Koa();

const router = new OreoRouter({
  api: {
    info: {
      title: 'title',
      description: 'description',
      version: '1.0.0',
      contact: {
        name: 'API Support',
        url: 'http://www.swagger.io/support',
        email: 'support@swagger.io',
      },
    },
  },
  apiExplorerEnable: true,
  middleware: {
    dir: './controllers',
  },
});

app.use(router.routes());

app.listen(3000, () => {
  console.log(`
Listening Port : 3000
Api-Explorer   : http://127.0.0.1:3000/api-explorer
  `);
});
