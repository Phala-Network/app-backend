import {queryType, intArg, arg} from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('stakePoolList', {
      type: 'StakePoolList',
      args: {
        take: intArg(),
        skip: intArg(),
        orderBy: arg({type: 'StakePoolOrderByInput'}),
        where: arg({type: 'StakePoolWhereInput'}),
      },
      resolve: async (parent, args, ctx) => {
        const list = await ctx.prisma.stakePools.findMany({
          take: args.take || undefined,
          skip: args.skip || undefined,
          // FIXME: null type should not be generated
          orderBy: (args.orderBy as any) || undefined,
          where: (args.where as any) || undefined,
        })
        const totalCount = await ctx.prisma.stakePools.count({
          where: (args.where as any) || undefined,
        })
        return {
          list,
          totalCount,
        }
      },
    })

    t.list.field('accountList', {
      type: 'Account',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.accounts.findMany()
      },
    })
  },
})
