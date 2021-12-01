import {enumType, inputObjectType} from 'nexus'

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const StringFilter = inputObjectType({
  name: 'StringFilter',
  definition(t) {
    t.string('contains')
    t.string('endsWith')
    t.string('equals')
    t.string('gt')
    t.string('gte')
    t.list.nonNull.string('in')
    t.string('lt')
    t.string('lte')
    t.list.nonNull.string('notIn')
    t.string('startsWith')
  },
})

export const DecimalFilter = inputObjectType({
  name: 'DecimalFilter',
  definition(t) {
    t.string('equals')
    t.list.nonNull.string('in')
    t.list.nonNull.string('notIn')
    t.string('lt')
    t.string('lte')
    t.string('gt')
    t.string('gte')
    t.string('not')
  },
})

export const IntFilter = inputObjectType({
  name: 'IntFilter',
  definition(t) {
    t.int('equals')
    t.list.nonNull.int('in')
    t.list.nonNull.int('notIn')
    t.int('lt')
    t.int('lte')
    t.int('gt')
    t.int('gte')
    t.int('not')
  },
})

export const BigIntFilter = inputObjectType({
  name: 'BigIntFilter',
  definition(t) {
    t.bigInt('equals')
    t.list.nonNull.bigInt('in')
    t.list.nonNull.bigInt('notIn')
    t.bigInt('lt')
    t.bigInt('lte')
    t.bigInt('gt')
    t.bigInt('gte')
    t.bigInt('not')
  },
})
