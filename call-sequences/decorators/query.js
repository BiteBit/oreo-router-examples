import { toDecorator } from 'oreo-router';

function queryMiddlewareWrapper(querySchema) {
  return async (ctx, next) => {
    console.log('Decorator Query', querySchema);

    await next();
  };
}

const Query = toDecorator({
  name: 'Query',
  maxDecorate: 1,
  middleware: queryMiddlewareWrapper,
});

export {
  queryMiddlewareWrapper,
  Query,
};
