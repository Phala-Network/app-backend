import {objectType} from 'nexus'

export const StakePool = objectType({
  name: 'StakePool',
  definition(t) {
    t.string('pid')
    t.int('stakers_count')
    t.bigint('last_updated_block_number')
    t.decimal('commission')
    t.decimal('owner_reward')
    t.decimal('cap')
    t.decimal('total_shares')
    t.decimal('total_stake')
    t.decimal('free_stake')
    t.decimal('releasing_stake')
    t.decimal('commission_ratio')
    t.decimal('used_stake')
    t.int('stakers_count')
    t.int('workers_count')
    t.int('mining_workers_count')
  },
})
