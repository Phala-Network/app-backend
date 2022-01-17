import 'reflect-metadata'
import * as tq from 'type-graphql'
import {resolvers} from '@generated/type-graphql'
import {ApolloServer} from 'apollo-server'
import {ApolloServerPluginLandingPageDisabled} from 'apollo-server-core'
import {context} from './context'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
    emitSchemaFile: process.env.NODE_ENV !== 'production',
  })

  const server = new ApolloServer({
    schema,
    context,
    plugins: [
      process.env.NODE_ENV === 'production' &&
        ApolloServerPluginLandingPageDisabled(),
    ].filter(<T>(x: T): x is T extends false ? never : T => Boolean(x)),
  })

  server
    .listen(process.env.PORT || 4000)
    .then(({url}) => console.log(`Server is running on ${url}`))
}

app()
