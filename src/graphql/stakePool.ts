import {inputObjectType, objectType} from 'nexus'

export const StakePool = objectType({
  name: 'StakePool',
  definition(t) {
    t.bigInt('pid')
    t.string('owner_address')
    t.decimal('commission')
    t.decimal('owner_reward')
    t.decimal('cap')
    t.decimal('reward_acc')
    t.decimal('total_shares')
    t.decimal('total_stake')
    t.decimal('free_stake')
    t.decimal('releasing_stake')
    t.decimal('commission_ratio')
    t.decimal('used_stake')
    t.int('stakers_count')
    t.int('workers_count')
    t.int('mining_workers_count')
    t.decimal('apr')
  },
})

export const StakePoolOrderByInput = inputObjectType({
  name: 'StakePoolOrderByInput',
  definition(t) {
    t.field('pid', {type: 'SortOrder'})
    t.field('stakers_count', {type: 'SortOrder'})
    t.field('commission', {type: 'SortOrder'})
    t.field('owner_reward', {type: 'SortOrder'})
    t.field('cap', {type: 'SortOrder'})
    t.field('total_shares', {type: 'SortOrder'})
    t.field('total_stake', {type: 'SortOrder'})
    t.field('free_stake', {type: 'SortOrder'})
    t.field('releasing_stake', {type: 'SortOrder'})
    t.field('commission_ratio', {type: 'SortOrder'})
    t.field('used_stake', {type: 'SortOrder'})
    t.field('stakers_count', {type: 'SortOrder'})
    t.field('workers_count', {type: 'SortOrder'})
    t.field('mining_workers_count', {type: 'SortOrder'})
  },
})

export const StakePoolWhereInput = inputObjectType({
  name: 'StakePoolWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', {type: 'StakePoolWhereInput'})
    t.list.nonNull.field('NOT', {type: 'StakePoolWhereInput'})
    t.list.nonNull.field('OR', {type: 'StakePoolWhereInput'})
    t.field('pid', {type: 'BigIntFilter'})
    t.field('commission', {type: 'DecimalFilter'})
    t.field('workers_count', {type: 'IntFilter'})
    // TODO: add more fields
  },
})
