import {queryType, intArg, arg} from 'nexus'

export const Query = queryType({
  definition(t) {
    t.list.field('stakePool', {
      type: 'StakePool',
      args: {
        take: intArg(),
        skip: intArg(),
        orderBy: arg({type: 'StakePoolOrderByInput'}),
        where: arg({type: 'StakePoolWhereInput'}),
      },
      resolve: (parent, args, ctx) => {
        return ctx.prisma.stakePools.findMany({
          take: args.take || undefined,
          skip: args.skip || undefined,
          // FIXME: null type should not be generated
          orderBy: (args.orderBy as any) || undefined,
          where: (args.where as any) || undefined,
        })
      },
    })

    t.list.field('account', {
      type: 'Account',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.accounts.findMany()
      },
    })
  },
})
