import {queryType, intArg, arg, stringArg} from 'nexus'

export const Query = queryType({
  definition(t) {
    t.list.field('StakePool', {
      type: 'StakePool',
      args: {
        take: intArg(),
        skip: intArg(),
        orderBy: arg({type: 'StakePoolOrderByInput'}),
        where: arg({type: 'StakePoolWhereInput'}),
      },
      resolve: (parent, args, context) => {
        return context.prisma.stake_pools.findMany({
          take: args.take || undefined,
          skip: args.skip || undefined,
          // FIXME: null type should not be generated
          orderBy: (args.orderBy as any) || undefined,
          where: (args.where as any) || undefined,
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
