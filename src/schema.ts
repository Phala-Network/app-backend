import {makeSchema} from 'nexus'
import * as types from './graphql'
// import {Account} from './Account'
// import {BigIntScalar} from './BigIntDecimalScalar'
// import {DecimalScalar} from './DecimalScalar'
// import {Query} from './Query'
// import {StakePool} from './StakePool'

export const schema = makeSchema({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  types,
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
})
