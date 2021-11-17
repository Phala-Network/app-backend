import {ApolloServer} from 'apollo-server'
import {schema} from './schema'
import {context} from './context'

const server = new ApolloServer({
  schema,
  context,
})

server
  .listen(process.env.PORT || 4000)
  .then(({url}) => console.log(`Server is running on ${url}`))
