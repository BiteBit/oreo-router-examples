import {
  Middleware,
  Use,
  Get,
  Summary,
  Description,
  Tags,
  Query,
  Responses,
} from 'oreo-router';

import logger from '../middlewares/logger';

@Middleware('/hello')
export default class ExampleController {
  @Get('/log')
  @Summary('hello')
  @Description('oreo-router is awesome!')
  @Tags(['example'])
  @Query({
    name: {
      type: 'string',
      required: true,
    },
  })
  @Responses({
    200: {
      description: 'Request success.',
    },
  })
  @Use(logger)
  log(ctx, next) {
    ctx.response.body = `hello world! ${ctx.request.query.name}`;
  }

  @Get('/no-log')
  @Summary('hello but no log')
  @Description('oreo-router is awesome!')
  @Tags(['example'])
  @Query({
    name: {
      type: 'string',
      required: true,
    },
  })
  @Responses({
    200: {
      description: 'Request success.',
    },
  })
  nolog(ctx, next) {
    ctx.response.body = `hello world! ${ctx.request.query.name}`;
  }
}
