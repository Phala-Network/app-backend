import 'reflect-metadata'
import * as tq from 'type-graphql'
import {resolvers} from '@generated/type-graphql'
import {ApolloServer} from 'apollo-server'
import {context} from './context'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
    emitSchemaFile: true,
  })

  const server = new ApolloServer({
    schema,
    context,
  })

  server
    .listen(process.env.PORT || 4000)
    .then(({url}) => console.log(`Server is running on ${url}`))
}

app()
