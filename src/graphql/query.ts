import {queryType, intArg, arg} from 'nexus'
import {omitBy, isNull} from 'lodash'

export const Query = queryType({
  definition(t) {
    t.list.field('StakePool', {
      type: 'StakePool',
      args: {
        take: intArg(),
        skip: intArg(),
        orderBy: arg({type: 'StakePoolOrderByInput'}),
      },
      resolve: (parent, args, context) => {
        console.log(args.orderBy)
        return context.prisma.stake_pools.findMany({
          take: args.take || undefined,
          skip: args.skip || undefined,
          // FIXME: null type should not be generated
          orderBy: (args.orderBy as any) || undefined,
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
