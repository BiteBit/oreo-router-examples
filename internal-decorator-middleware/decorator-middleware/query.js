
export default function queryMiddlewareWrapper(querySchema) {
  return async (ctx, next) => {
    if (querySchema.name.required === true) {
      if (!ctx.request.query.name) {
        ctx.throw(400, 'Please enter name');
      } else {
        await next();
      }
    } else {
      await next();
    }
  };
}
