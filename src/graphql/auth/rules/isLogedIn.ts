import { rule } from 'graphql-shield';
export const isLogedIn = rule({ cache: 'contextual' })(async (_parent, _args, ctx) => {
  return Boolean(ctx.user);
});
