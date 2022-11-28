import { allow, shield } from 'graphql-shield';
import { isLogedIn } from './rules/isLogedIn';
export const permissions = shield(
  {
    Query: {
      '*': isLogedIn,
    },
  },
  {
    debug: true,
  }
);
