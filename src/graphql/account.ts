import {inputObjectType, objectType} from 'nexus'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.int('id')
    t.nullable.string('address')
    t.list.field('stakePools', {
      type: 'StakePool',
    })
    t.list.field('stakePoolStakers', {
      type: 'Staker',
    })
  },
})

export const AccountWhereInput = inputObjectType({
  name: 'AccountWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', {type: 'AccountWhereInput'})
    t.list.nonNull.field('NOT', {type: 'AccountWhereInput'})
    t.list.nonNull.field('OR', {type: 'AccountWhereInput'})
    t.field('address', {type: 'StringFilter'})
  },
})
