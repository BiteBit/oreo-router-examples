export default function log(label) {
  return (ctx, next) => {
    console.log(label);

    return next();
  };
}
