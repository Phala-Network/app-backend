import {inputObjectType, objectType} from 'nexus'

export const StakePool = objectType({
  name: 'StakePool',
  definition(t) {
    t.bigInt('pid')
    t.string('ownerAddress')
    t.decimal('commission')
    t.decimal('ownerReward')
    t.decimal('cap')
    t.decimal('rewardAcc')
    t.decimal('totalShares')
    t.decimal('totalStake')
    t.decimal('freeStake')
    t.decimal('releasingStake')
    t.decimal('commissionRatio')
    t.decimal('usedStake')
    t.int('stakersCount')
    t.int('workersCount')
    t.int('miningWorkersCount')
    t.decimal('apr')
  },
})

export const StakePoolOrderByInput = inputObjectType({
  name: 'StakePoolOrderByInput',
  definition(t) {
    t.field('pid', {type: 'SortOrder'})
    t.field('stakersCount', {type: 'SortOrder'})
    t.field('commission', {type: 'SortOrder'})
    t.field('ownerReward', {type: 'SortOrder'})
    t.field('cap', {type: 'SortOrder'})
    t.field('totalShares', {type: 'SortOrder'})
    t.field('totalStake', {type: 'SortOrder'})
    t.field('freeStake', {type: 'SortOrder'})
    t.field('releasingStake', {type: 'SortOrder'})
    t.field('commissionRatio', {type: 'SortOrder'})
    t.field('usedStake', {type: 'SortOrder'})
    t.field('stakersCount', {type: 'SortOrder'})
    t.field('workersCount', {type: 'SortOrder'})
    t.field('miningWorkersCount', {type: 'SortOrder'})
    t.field('apr', {type: 'SortOrder'})
  },
})

export const StakePoolWhereInput = inputObjectType({
  name: 'StakePoolWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', {type: 'StakePoolWhereInput'})
    t.list.nonNull.field('NOT', {type: 'StakePoolWhereInput'})
    t.list.nonNull.field('OR', {type: 'StakePoolWhereInput'})
    t.field('pid', {type: 'BigIntFilter'})
    t.field('ownerAddress', {type: 'StringFilter'})
    t.field('workersCount', {type: 'IntFilter'})
    t.field('apr', {type: 'DecimalFilter'})
    t.field('commission', {type: 'DecimalFilter'})
    t.field('freeStake', {type: 'DecimalFilter'})
  },
})

export const StakePoolList = objectType({
  name: 'StakePoolList',
  definition(t) {
    t.list.field('list', {
      type: 'StakePool',
    })
    t.int('totalCount')
  },
})
