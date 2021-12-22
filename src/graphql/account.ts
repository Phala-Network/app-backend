import {objectType} from 'nexus'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.int('id')
    t.nullable.string('address')
    t.list.field('stakePools', {
      type: 'StakePool',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.accounts
          .findUnique({where: {id: parent.id}})
          .stakePools()
      },
    })
    t.list.field('stakePoolStakers', {
      type: 'Staker',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.accounts
          .findUnique({where: {id: parent.id}})
          .stakePoolStakers()
      },
    })
  },
})
