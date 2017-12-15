import { toDecorator } from 'oreo-router';

export default toDecorator({
  name: 'Log',
  middleware: (label) => {
    return async (ctx, next) => {
      const path = ctx.path;
      const method = ctx.method;

      console.log(`${label} -> ${new Date().toISOString()} ${method} ${path}`);

      await next();

      console.log(`${label} <- ${new Date().toISOString()} ${method} ${path}`);
    };
  },
});
