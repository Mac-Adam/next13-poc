import { extendType, objectType } from 'nexus';

export const Thing = objectType({
  name: 'Thing',
  definition(t) {
    t.string('id');
    t.string('name');
    t.int('amount');
  },
});
export const ThingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('things', {
      type: 'Thing',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.thing.findMany();
      },
    });
  },
});
