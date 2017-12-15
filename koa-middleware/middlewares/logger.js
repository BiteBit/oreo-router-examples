export default async function (ctx, next) {
  const path = ctx.path;
  const method = ctx.method;

  console.log(`-> ${new Date().toISOString()} ${method} ${path}`);

  await next();

  console.log(`<- ${new Date().toISOString()} ${method} ${path}`);
}
