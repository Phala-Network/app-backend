import {queryType, intArg} from 'nexus'

export const Query = queryType({
  definition(t) {
    t.list.field('StakePool', {
      type: 'StakePool',
      args: {
        take: intArg(),
        skip: intArg(),
      },
      resolve: (parent, args, context) => {
        return context.prisma.stake_pools.findMany({
          take: args.take || undefined,
          skip: args.skip || undefined,
        })
      },
    })
    t.list.field('Account', {
      type: 'Account',
      resolve: (parent, args, context) => {
        return context.prisma.accounts.findMany()
      },
    })
  },
})
