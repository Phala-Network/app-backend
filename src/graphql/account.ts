import {objectType} from 'nexus'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.int('id')
    t.nullable.string('address')
    t.boolean('miner_operator_role')
    t.decimal('balance')
    t.nullable.list.field('stake_pools', {
      type: 'StakePool',
      resolve: (parent, args, context) => {
        return context.prisma.accounts
          .findUnique({
            where: {id: parent.id || undefined},
          })
          .stake_pools()
      },
    })
  },
})
