import {
  Middleware,
  Get,
  Summary,
  Description,
  Tags,
  Query,
  Responses,
} from 'oreo-router';

@Middleware('/hello')
export default class ExampleController {
  @Get('/')
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
  hello(ctx, next) {
    ctx.response.body = `hello world! ${ctx.request.query.name}`;
  }
}
