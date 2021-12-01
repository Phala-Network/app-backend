import {objectType} from 'nexus'

export const Staker = objectType({
  name: 'Staker',
  definition(t) {
    t.int('id')
    t.decimal('locked')
    t.decimal('shares')
    t.decimal('availableRewards')
    t.decimal('rewardDebt')
    t.boolean('isOwner')
    t.nullable.field('stakePools', {
      type: 'StakePool',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.stakePoolStakers
          .findUnique({
            where: {id: parent.id},
          })
          .StakePools()
      },
    })
    t.nullable.field('accounts', {
      type: 'Account',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.stakePoolStakers
          .findUnique({
            where: {id: parent.id},
          })
          .accounts()
      },
    })
  },
})
