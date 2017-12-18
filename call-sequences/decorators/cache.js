import { toDecorator } from 'oreo-router';

export default toDecorator({
  name: 'Cache',
  maxDecorate: 10,
  middleware: (label) => {
    return (ctx, next) => {
      console.log(label);

      return next();
    };
  },
});
