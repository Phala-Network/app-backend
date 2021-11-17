import {intArg, makeSchema, objectType, queryType} from 'nexus'

const Query = queryType({
  definition(t) {
    t.list.field('StakePool', {
      type: 'StakePool',
      args: {
        take: intArg(),
        skip: intArg(),
      },
      resolve: (parent, args, context) => {
        return context.prisma.stake_pools.findMany({
          take: args.take || undefined,
          skip: args.skip || undefined,
        })
      },
    })

    t.list.field('Account', {
      type: 'Account',
      resolve: (parent, args, context) => {
        return context.prisma.accounts.findMany()
      },
    })
  },
})

const StakePool = objectType({
  name: 'StakePool',
  definition(t) {
    t.string('pid')
    t.int('stakers_count')
    t.string('commission')
    t.string('owner_reward')
    t.string('cap')
    t.string('total_shares')
    t.string('total_stake')
    t.string('free_stake')
    t.string('releasing_stake')
    t.string('commission_ratio')
    t.string('used_stake')
    t.int('stakers_count')
    t.int('workers_count')
    t.int('mining_workers_count')
  },
})

const Account = objectType({
  name: 'Account',
  definition(t) {
    t.id('id')
    t.nullable.string('address')
    t.boolean('miner_operator_role')
    t.string('balance')
    t.nullable.list.field('stake_pools', {
      type: 'StakePool',
      resolve: (parent, args, context) => {
        return context.prisma.accounts
          .findUnique({
            where: {id: Number(parent.id) || undefined},
          })
          .stake_pools()
      },
    })
  },
})

export const schema = makeSchema({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  types: [Query, StakePool, Account],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
})
