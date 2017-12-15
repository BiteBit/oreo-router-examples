import Koa from 'koa';
import { OreoRouter } from 'oreo-router';

const app = new Koa();

const router = new OreoRouter({
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
