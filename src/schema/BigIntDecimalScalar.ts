import {scalarType} from 'nexus'

export const BigIntScalar = scalarType({
  name: 'BigInt',
  asNexusMethod: 'bigint',
  sourceType: 'bigint',
  parseValue(value: string | number) {
    return BigInt(value)
  },
  serialize(value: bigint) {
    return value.toString()
  },
})
