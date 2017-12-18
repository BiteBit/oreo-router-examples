import {
  Middleware,
  Get,
  Summary,
  Description,
  Tags,
  Query,
  Responses,
  UseBefore,
  Use,
  UseAfter,
} from 'oreo-router';

import Cache from '../decorators/cache';
import logger from '../middlewares/log';

@Middleware('/hello')
@Cache('Decorator Class')
@UseBefore(logger('UseBefore Class '))
@Use(logger('Use Class'))
@UseAfter(logger('UseAfter Class'))
export default class ExampleController {
  @Get('/')
  @Summary('hello')
  @Description('oreo-router is awesome!')
  @Cache('Decorator function 0')
  @Tags(['example'])
  @Query({
    name: {
      type: 'string',
      required: true,
    },
  })
  @Cache('Decorator function 1')
  @Responses({
    200: {
      description: 'Request success.',
    },
  })
  @Cache('Decorator function 2')
  @UseBefore(logger('UseBefore Class function'))
  @Use(logger('Use Class function'))
  @UseAfter(logger('UseAfter Class function'))
  hello(ctx, next) {
    console.log('hello world!');
    ctx.response.body = `hello world! ${ctx.request.query.name}`;

    return next();
  }
}
