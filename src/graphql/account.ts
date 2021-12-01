import {objectType} from 'nexus'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.int('id')
    t.nullable.string('address')
    t.list.field('stake_pools', {
      type: 'StakePool',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.accounts
          .findUnique({where: {id: parent.id}})
          .stake_pools()
      },
    })
    t.list.field('stake_pool_stakers', {
      type: 'Staker',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.accounts
          .findUnique({where: {id: parent.id}})
          .stake_pool_stakers()
      },
    })
  },
})
