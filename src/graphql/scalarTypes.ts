import {scalarType} from 'nexus'
import {Prisma} from '@prisma/client'

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

export const DecimalScalar = scalarType({
  name: 'Decimal',
  asNexusMethod: 'decimal',
  sourceType: {
    module: require.resolve('@prisma/client/runtime'),
    export: 'Decimal',
  },
  parseValue(value: string | number) {
    return new Prisma.Decimal(value)
  },
  serialize(value: Prisma.Decimal) {
    return value.toString()
  },
})
