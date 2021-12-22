import {inputObjectType, objectType} from 'nexus'

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
    })
    t.nullable.field('accounts', {
      type: 'Account',
    })
  },
})

export const StakerWhereInput = inputObjectType({
  name: 'StakerWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', {type: 'StakerWhereInput'})
    t.list.nonNull.field('NOT', {type: 'StakerWhereInput'})
    t.list.nonNull.field('OR', {type: 'StakerWhereInput'})
    t.field('accounts', {type: 'AccountWhereInput'})
  },
})
