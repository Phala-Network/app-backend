import {scalarType} from 'nexus'
import {Prisma} from '@prisma/client'
import {Kind} from 'graphql'

export const BigIntScalar = scalarType({
  name: 'BigInt',
  asNexusMethod: 'bigInt',
  sourceType: 'bigint',
  serialize(value: bigint) {
    return value.toString()
  },
  parseValue(value: string | number) {
    return BigInt(value)
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT || ast.kind === Kind.STRING) {
      return BigInt(ast.value)
    }
    return null
  },
})

// https://github.com/prisma/nexus-prisma/blob/main/src/scalars/Decimal.ts
export const DecimalScalar = scalarType({
  name: 'Decimal',
  asNexusMethod: 'decimal',
  sourceType: {
    module: require.resolve('@prisma/client/runtime'),
    export: 'Decimal',
  },
  serialize(value: Prisma.Decimal) {
    return value.toString()
  },
  parseValue(value: Prisma.Decimal.Value) {
    return new Prisma.Decimal(value)
  },
  parseLiteral(ast) {
    if (
      ast.kind === Kind.INT ||
      ast.kind === Kind.FLOAT ||
      ast.kind === Kind.STRING
    ) {
      return new Prisma.Decimal(ast.value)
    }
    return null
  },
})
