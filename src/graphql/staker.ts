import {objectType} from 'nexus'

export const Staker = objectType({
  name: 'Staker',
  definition(t) {
    t.int('id')
    t.decimal('locked')
    t.decimal('shares')
    t.decimal('available_rewards')
    t.decimal('reward_debt')
    t.boolean('is_owner')
    t.nullable.field('stake_pools', {
      type: 'StakePool',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.stake_pool_stakers
          .findUnique({
            where: {id: parent.id},
          })
          .stake_pools()
      },
    })
    t.nullable.field('accounts', {
      type: 'Account',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.stake_pool_stakers
          .findUnique({
            where: {id: parent.id},
          })
          .accounts()
      },
    })
  },
})
